    (function () {
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // ---- Reveal on scroll ----
      var els = document.querySelectorAll('.reveal');
      if (reduce || !('IntersectionObserver' in window)) {
        els.forEach(function (el) { el.classList.add('in'); });
      } else {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
          });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        els.forEach(function (el) { io.observe(el); });
      }

      // ---- Hero: typed statement ----
      // No JS or reduced motion: the heading renders complete, no caret.
      var h1 = document.querySelector('.hero h1');
      if (h1 && !reduce) {
        var chars = [];
        var caret = document.createElement('span');
        caret.className = 'type-caret'; caret.setAttribute('aria-hidden', 'true');
        (function wrap(parent) {
          Array.prototype.slice.call(parent.childNodes).forEach(function (node) {
            if (node.nodeType === 3) {
              var frag = document.createDocumentFragment();
              node.textContent.split('').forEach(function (c) {
                if (c === ' ') { frag.appendChild(document.createTextNode(' ')); return; }
                var s = document.createElement('span');
                s.className = 'ch'; s.textContent = c;
                frag.appendChild(s); chars.push(s);
              });
              parent.replaceChild(frag, node);
            } else if (node.nodeType === 1 && !(node.classList && node.classList.contains('sr-only'))) {
              wrap(node);
            }
          });
        })(h1);
        h1.appendChild(caret);
        var ci = 0;
        if (chars.length) chars[0].before(caret);
        setTimeout(function tick() {
          if (ci < chars.length) {
            var ch = chars[ci++];
            ch.classList.add('on');
            ch.after(caret);
            setTimeout(tick, 42 + Math.random() * 46);
          }
        }, 850);
      }

      // ---- Hero: cursor light blob with ripple ----
      // A soft teal glow eases behind the cursor; movement emits expanding ripple rings.
      // Fine pointers only; the loop fades out and stops when idle.
      var hero = document.querySelector('.hero');
      var canvas = document.getElementById('hero-trail');
      if (canvas && hero && !reduce && window.matchMedia('(pointer: fine)').matches) {
        var ctx = canvas.getContext('2d');
        var dpr = window.devicePixelRatio || 1;
        var mx = 0, my = 0, have = false, bx = 0, by = 0, blobA = 0;
        var ripples = [], running = false, lastMove = 0, lastRipple = null;
        function fit() {
          canvas.width = hero.clientWidth * dpr; canvas.height = hero.clientHeight * dpr;
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        fit();
        // hero can resize without a window resize (font swap, reflow, scrollbar,
        // zoom) — a stale canvas paints the blob offset from the real cursor
        if (window.ResizeObserver) new ResizeObserver(fit).observe(hero);
        else window.addEventListener('resize', fit);
        // listen globally: overlays/coalesced events can swallow hero-level moves
        window.addEventListener('pointermove', function (e) {
          var r = hero.getBoundingClientRect();
          if (e.clientY < r.top || e.clientY > r.bottom || e.clientX < r.left || e.clientX > r.right) return;
          mx = e.clientX - r.left; my = e.clientY - r.top;
          if (!have) { have = true; bx = mx; by = my; }
          lastMove = performance.now();
          if (!running) { running = true; requestAnimationFrame(frame); }
        });
        var R_LIFE = 900, R_MAX = 85;
        function frame(now) {
          var idle = now - lastMove > 900;
          bx += (mx - bx) * 0.14;
          by += (my - by) * 0.14;
          blobA += ((idle ? 0 : 1) - blobA) * 0.08;
          if (!idle && (!lastRipple || Math.hypot(mx - lastRipple.x, my - lastRipple.y) > 60)) {
            ripples.push({ x: mx, y: my, t: now });
            lastRipple = { x: mx, y: my };
          }
          ctx.clearRect(0, 0, hero.clientWidth, hero.clientHeight);
          ripples = ripples.filter(function (p) { return now - p.t < R_LIFE; });
          ripples.forEach(function (p) {
            var k = (now - p.t) / R_LIFE;
            ctx.strokeStyle = 'rgba(95,212,195,' + (0.35 * (1 - k)).toFixed(3) + ')';
            ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.arc(p.x, p.y, 10 + R_MAX * k, 0, 6.2832); ctx.stroke();
          });
          if (blobA > 0.01 || !idle) {
            var g = ctx.createRadialGradient(bx, by, 0, bx, by, 130);
            g.addColorStop(0, 'rgba(95,212,195,' + (0.14 * blobA).toFixed(3) + ')');
            g.addColorStop(0.5, 'rgba(95,212,195,' + (0.05 * blobA).toFixed(3) + ')');
            g.addColorStop(1, 'rgba(95,212,195,0)');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(bx, by, 130, 0, 6.2832); ctx.fill();
          }
          if (blobA > 0.01 || ripples.length) requestAnimationFrame(frame);
          else running = false;
        }
      }

      // ---- Nav border on scroll ----
      var nav = document.getElementById('nav');
      var scrolled = false;
      function onScroll() {
        var s = window.scrollY > 8;
        if (s !== scrolled) { scrolled = s; nav.classList.toggle('scrolled', s); }
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    })();



window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.remove('bg-indigo-50');
      navbar.classList.add('bg-white');
    } else {
      navbar.classList.remove('bg-white');
      navbar.classList.add('bg-indigo-50');
    }
  });
    
        /* SideBar*/
    
    document.getElementById('openSidebarButton').addEventListener('click', function() {
                document.getElementById('sidebar').classList.remove('translate-x-full');
                document.getElementById('sidebar').classList.add('translate-x-0');
            });
    
            document.getElementById('closeSidebarButton').addEventListener('click', function() {
                document.getElementById('sidebar').classList.remove('translate-x-0');
                document.getElementById('sidebar').classList.add('translate-x-full');
            });
            
            var TxtType = function(el, toRotate, period) {
                this.toRotate = toRotate;
                this.el = el;
                this.loopNum = 0;
                this.period = parseInt(period, 2) || 1000;
                this.txt = '';
                this.tick();
                this.isDeleting = false;
            };
        
            TxtType.prototype.tick = function() {
                var i = this.loopNum % this.toRotate.length;
                var fullTxt = this.toRotate[i];
        
                if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
                } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
                }
        
                this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
        
                var that = this;
                var delta = 200 - Math.random() * 100;
        
                if (this.isDeleting) { delta /= 2; }
        
                if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
                } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
                }
        
                setTimeout(function() {
                that.tick();
                }, delta);
            };
        
            window.onload = function() {
                var elements = document.getElementsByClassName('typewrite');
                for (var i=0; i<elements.length; i++) {
                    var toRotate = elements[i].getAttribute('data-type');
                    var period = elements[i].getAttribute('data-period');
                    if (toRotate) {
                      new TxtType(elements[i], JSON.parse(toRotate), period);
                    }
                }
                // INJECT CSS
                var css = document.createElement("style");
                css.type = "text/css";
                css.innerHTML = ".typewrite > .wrap { border-right: 0.09em solid #fff}";
                document.body.appendChild(css);
            };
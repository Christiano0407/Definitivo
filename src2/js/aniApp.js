var barra1 = document.getElementById('barra1')
		var barra2 = document.getElementById('barra2')
		var barra3 = document.getElementById('barra3')
		var barra4 = document.getElementById('barra4')
		var barra5 = document.getElementById('barra5')
		var barra6 = document.getElementById('barra6')
		
		barra1.addEventListener('animationend', function(event){
			
			console.log(event)
			var ev = event.animationName

			if(ev ==='barra_a' ){

				barra1.style.animationName = 'pelota'
				barra1.style.animationDuration = '0.3s';
				barra1.style.animationIterationCount = 1;
				barra1.style.animationFillMode = 'forwards'

				barra2.style.animationName = 'pelota'
				barra2.style.animationDuration = '0.3s';
				barra2.style.animationIterationCount = 1;
				barra2.style.animationFillMode = 'forwards'
				
				barra3.style.animationName = 'pelota'
				barra3.style.animationDuration = '0.3s';
				barra3.style.animationIterationCount = 1;
				barra3.style.animationFillMode = 'forwards'
				
				barra4.style.animationName = 'pelota'
				barra4.style.animationDuration = '0.3s';
				barra4.style.animationIterationCount = 1;
				barra4.style.animationFillMode = 'forwards'
				
				barra5.style.animationName = 'pelota'
				barra5.style.animationDuration = '0.3s';
				barra5.style.animationIterationCount = 1;
				barra5.style.animationFillMode = 'forwards'
				
				barra6.style.animationName = 'pelota'
				barra6.style.animationDuration = '0.3s';
				barra6.style.animationIterationCount = 1;
				barra6.style.animationFillMode = 'forwards'
					
				
			}

			else if(ev ==="pelota"){

				barra1.style.animationName = 'caida';
				barra1.style.animationDuration = '0.3s';
				barra1.style.animationIterationCount = 1;
				barra1.style.animationFillMode = 'forwards';

				barra2.style.animationName = 'caida';
				barra2.style.animationDuration = '0.3s';
				barra2.style.animationIterationCount = 1;
				barra2.style.animationFillMode = 'forwards';

				barra3.style.animationName = 'caida';
				barra3.style.animationDuration = '0.3s';
				barra3.style.animationIterationCount = 1;
				barra3.style.animationFillMode = 'forwards';

				barra4.style.animationName = 'caida';
				barra4.style.animationDuration = '0.3s';
				barra4.style.animationIterationCount = 1;
				barra4.style.animationFillMode = 'forwards';

				barra5.style.animationName = 'caida';
				barra5.style.animationDuration = '0.3s';
				barra5.style.animationIterationCount = 1;
				barra5.style.animationFillMode = 'forwards';

				barra6.style.animationName = 'caida';
				barra6.style.animationDuration = '0.3s';
				barra6.style.animationIterationCount = 1;
				barra6.style.animationFillMode = 'forwards';
			}

			else if(ev ==="caida"){

				barra1.style.animationName = 'rebotar';
				barra1.style.animationDuration = '.4s';
				barra1.style.animationIterationCount = '10';
				barra1.style.animationDirection = 'alternate';
				barra1.style.animationTimingFunction = 'ease-out';

				barra2.style.animationName = 'rebotar';
				barra2.style.animationDuration = '.4s';
				barra2.style.animationIterationCount = '10';
				barra2.style.animationDirection = 'alternate';
				barra2.style.animationTimingFunction = 'ease-out';

				barra3.style.animationName = 'rebotar';
				barra3.style.animationDuration = '.4s';
				barra3.style.animationIterationCount = '10';
				barra3.style.animationDirection = 'alternate';
				barra3.style.animationTimingFunction = 'ease-out';

				barra4.style.animationName = 'rebotar';
				barra4.style.animationDuration = '.4s';
				barra4.style.animationIterationCount = '10';
				barra4.style.animationDirection = 'alternate';
				barra4.style.animationTimingFunction = 'ease-out';

				barra5.style.animationName = 'rebotar';
				barra5.style.animationDuration = '.4s';
				barra5.style.animationIterationCount = '10';
				barra5.style.animationDirection = 'alternate';
				barra5.style.animationTimingFunction = 'ease-out';

				barra6.style.animationName = 'rebotar';
				barra6.style.animationDuration = '.4s';
				barra6.style.animationIterationCount = '10';
				barra6.style.animationDirection = 'alternate';
				barra6.style.animationTimingFunction = 'ease-out';

									
			}

			else if(ev ==="rebotar"){

				barra1.style.animationName = 'mover';
				barra1.style.animationDuration = '.5s';
				barra1.style.animationIterationCount = 1;
				barra1.style.animationTimingFunction = 'ease-in-out';

				barra2.style.animationName = 'mover';
				barra2.style.animationDuration = '.5s';
				barra2.style.animationIterationCount = 1;
				barra2.style.animationTimingFunction = 'ease-in-out';

				barra3.style.animationName = 'mover';
				barra3.style.animationDuration = '.5s';
				barra3.style.animationIterationCount = 1;
				barra3.style.animationTimingFunction = 'ease-in-out';

				barra4.style.animationName = 'mover';
				barra4.style.animationDuration = '.5s';
				barra4.style.animationIterationCount = 1;
				barra4.style.animationTimingFunction = 'ease-in-out';

				barra5.style.animationName = 'mover';
				barra5.style.animationDuration = '.5s';
				barra5.style.animationIterationCount = 1;
				barra5.style.animationTimingFunction = 'ease-in-out';

				barra6.style.animationName = 'mover';
				barra6.style.animationDuration = '.5s';
				barra6.style.animationIterationCount = 1;
				barra6.style.animationTimingFunction = 'ease-in-out';

									
			}

			else if(ev ==="mover"){

				barra1.style.animationName = 'barra_a';
				barra1.style.animationDuration = '3s';
				barra1.style.animationIterationCount = 1;
				barra1.style.animationTimingFunction = 'ease-in-out';

				barra2.style.animationName = 'barra_b';
				barra2.style.animationDuration = '3s';
				barra2.style.animationIterationCount = 1;
				barra2.style.animationTimingFunction = 'ease-in-out';

				barra3.style.animationName = 'barra_a';
				barra3.style.animationDuration = '3s';
				barra3.style.animationIterationCount = 1;
				barra3.style.animationTimingFunction = 'ease-in-out';

				barra4.style.animationName = 'barra_b';
				barra4.style.animationDuration = '3s';
				barra4.style.animationIterationCount = 1;
				barra4.style.animationTimingFunction = 'ease-in-out';

				barra5.style.animationName = 'barra_a';
				barra5.style.animationDuration = '3s';
				barra5.style.animationIterationCount = 1;
				barra5.style.animationTimingFunction = 'ease-in-out';

				barra6.style.animationName = 'barra_b';
				barra6.style.animationDuration = '3s';
				barra6.style.animationIterationCount = 1;
				barra6.style.animationTimingFunction = 'ease-in-out';

									
			}
		})
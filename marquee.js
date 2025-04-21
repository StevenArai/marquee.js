//A js implementation of the deprecated marquee tag

function initMarquees() {
    document.querySelectorAll('.marquee').forEach(container => {
      const text = container.innerText
      container.innerHTML = '' // 清空原内容
  
      const span = document.createElement('span')
      span.innerText = text
      container.appendChild(span)
  
      let pos = container.offsetWidth
      const speed = 1 // 每帧移动的像素
      const step = () => {
        pos -= speed
        if (pos < -span.offsetWidth) pos = container.offsetWidth
        span.style.transform = `translateX(${pos}px)`
        requestAnimationFrame(step)
      }
      step()
    })
  }
  
  window.addEventListener('load', initMarquees)
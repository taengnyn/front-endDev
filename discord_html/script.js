document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.content1, .content2, .content3, .content4');
  
    function checkBoxes() {
      const triggerBottom = window.innerHeight * 0.8;
  
      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
  
        if (boxTop < triggerBottom) {
          box.classList.add('show');
        }
      });
    }
  
    checkBoxes();
  
    window.addEventListener('scroll', checkBoxes);
  });
  
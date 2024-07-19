const typingText = "Welcome to Amit Adhikary's Portfolio";
// const typingParagraph = "A skilled backend engineer with expertise in Python,  HTML, CSS, Django, MySQL, MongoDB, and Django REST Framework.";

let i = 0;
let j = 0;
const speed = 100; 

function typeWriter() {
    if (i < typingText.length) {
        document.querySelector(".typing").innerHTML += typingText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        typeWriterParagraph();
    }
}

// function typeWriterParagraph() {
//     if (j < typingParagraph.length) {
//         document.querySelector(".typing-p").innerHTML += typingParagraph.charAt(j);
//         j++;
//         setTimeout(typeWriterParagraph, speed);
//     }
// }

typeWriter();
document.getElementById('resume-link').addEventListener('click', function(event) {
    event.preventDefault();
    const link = document.createElement('a');
    link.href = this.href;
    link.setAttribute('download', 'Amit_Adhikary_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.open(this.href, '_blank');
});
export default function initTyping() {
    let letter = 0;
    const text = '             Rafael Pohren';

    function typeWriter() {
        if(letter < text.length) {
            document.querySelector(".principal_sentence").innerHTML += text.charAt(letter);
            letter++;
            setTimeout(typeWriter, 180)
        }
    }

    typeWriter();
}
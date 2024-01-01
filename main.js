const labels = document.querySelectorAll('.form-control label');


labels.forEach(label => { // for each label
    label.innerHTML = label.innerText // get the text from the label
        .split('') // split the text into an array of letters
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) // for each letter, wrap it in a span with a transition delay
        .join(''); // join the array back into a string
})
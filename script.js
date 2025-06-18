const colorInput = document.getElementById('colorInput')

const colorCode = document.getElementById('colorCode')

const copyPrimaryColorBtn = document.getElementById('copyPrimaryColorBtn')

const complementaryColor = document.getElementById('complementaryColor')

const copyComplementaryColorCodeBtn = document.getElementById('copyComplementaryColorCodeBtn')

const saveColorBtn = document.getElementById('saveColorBtn')

const leftContents = document.querySelector('.leftContents')

const rightContents = document.querySelector('.rightContents')

let complementaryColorCode;

colorInput.addEventListener('input', () => {

    const selectedColor = colorInput.value
    
    const code = parseInt(selectedColor.slice(1),16) // ham yaha replace method bhi use kar sakte the
    
    const num = 0xFFFFFF ^ code
    
    complementaryColorCode = num.toString(16).padStart(6,'0')
    
    complementaryColor.style.backgroundColor = `#${complementaryColorCode}`
    
    colorCode.textContent = `${colorInput.value}`
    
    colorCode.style.color = `${colorInput.value}`
    
})

saveColorBtn.addEventListener('click', ( ) => {

    const cardLeft = document.createElement('div')

    const cardRight = document.createElement('div')


    cardLeft.className = 'card'

    cardLeft.style.backgroundColor = `${colorInput.value}`

    cardLeft.textContent = `${colorInput.value}`

    leftContents.prepend(cardLeft)


    cardRight.className = 'card'

    cardRight.style.backgroundColor = `#${complementaryColorCode}`

    cardRight.textContent = `#${complementaryColorCode}`

    rightContents.prepend(cardRight)

})

copyPrimaryColorBtn.addEventListener('click', () => {

    navigator.clipboard.writeText(colorInput.value)
        .then(() => {
            showToast("Copied to clipboard!");
        })
        .catch((err) => {
            showToast("Failed to copy:", err);
        });
})

copyComplementaryColorCodeBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(`#${complementaryColorCode}`)
        .then(() => {
            showToast("Copied to clipboard!");
        })
        .catch((err) => {
            showToast("Failed to copy:", err);
        });
})



function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.className = 'toast';
    
    document.body.appendChild(toast);

    // Trigger animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    // Remove after 2 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300); // wait for animation to end
    }, 2000);
}

# 🎨 Advanced Color Picker

A sleek and interactive color picker web app that not only allows you to pick primary colors 
but also generates their complementary colors, lets you copy hex codes, 
and saves them beautifully in a UI card layout.

---

## [Check it out](https://aman-shahi-dev.github.io/advance-color-picker/)

---

## ✨ Features

- 🎯 Real-time color selection
- 🧠 Automatically generates complementary color
- 📋 Copy primary and complementary color codes to clipboard
- 💾 Save your favorite color combinations
- 🪄 Smooth UI with toast notifications (no more boring alerts!)

---

## 🔧 Tech Stack

- **HTML**
- **CSS** (Custom styling & responsive layout)
- **JavaScript** (DOM manipulation, clipboard API, color logic)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/advanced-color-picker.git
cd advanced-color-picker
```


### 2. Open index.html in your browser
You can either double-click the file or use Live Server in VS Code.

📂 Folder Structure
bash
Copy
Edit
advanced-color-picker/
│
├── index.html          # Main HTML file
├── style.css           # Styling file
├── script.js           # JavaScript logic
└── README.md           # This file


## 💡 How It Works

Pick a primary color using the color input.

The app calculates the complementary color using bitwise XOR.

Both colors are shown with their hex codes.

Click Copy buttons to copy the code.

Click Save to store them in a card layout.

## 🧠 Complementary Color Logic

The complementary color is calculated using bitwise XOR with white color (0xFFFFFF):

```javascript
const code = parseInt(selectedColor.slice(1), 16);
const num = 0xFFFFFF ^ code;
const complementary = num.toString(16).padStart(6, '0');
```

## 🔔 Toast Notification Example

Instead of alert(), we show a toast using this reusable function:
```javascript
function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.className = 'toast';
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}
```

🙌 Author
Made with ❤️ by Aman

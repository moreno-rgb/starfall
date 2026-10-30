const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Respon otomatis berdasarkan kata kunci (Pattern Matching)
function generateResponse(text) {
    const input = text.toLowerCase();

    if (input.includes('sedih') || input.includes('kecewa')) {
        return "Sedih adalah hal yang wajar, Pengembara. Seperti hujan yang membasahi Hutan Avidya, ia ada untuk membersihkan dan menumbuhkan hal baru.";
    } else if (input.includes('capek') || input.includes('lelah') || input.includes('penat')) {
        return "Istirahatlah sejenak. Kamu tidak harus menyelesaikan semua tugas dunia dalam satu hari. Cobalah tarik napas dalam-dalam.";
    } else if (input.includes('cemas') || input.includes('takut') || input.includes('stres')) {
        return "Kecemasan itu seperti angin kencang di Rumah Daena. Dengarkan baik-baik, tetapi jangan biarkan ia menerbangkan kedamaian hatimu.";
    } else if (input.includes('terima kasih') || input.includes('makasih')) {
        return "Sama-sama, Pengembara. Aku selalu ada di sini jika kamu butuh teman bicara.";
    } else {
        return "Aku mendengarkanmu. Ceritakan lebih banyak tentang apa yang kamu rasakan saat ini.";
    }
}

function sendMessage() {
    const text = userInput.value.trim();
    if (text === "") return;

    // Tampilkan pesan User
    const userMsgDiv = document.createElement('div');
    userMsgDiv.className = 'message user-msg';
    userMsgDiv.textContent = text;
    chatBox.appendChild(userMsgDiv);

    userInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Balasan Bot dengan sedikit delay agar terkesan mengetik
    setTimeout(() => {
        const botMsgDiv = document.createElement('div');
        botMsgDiv.className = 'message bot-msg';
        botMsgDiv.innerHTML = `<strong>Nahida:</strong> ${generateResponse(text)}`;
        chatBox.appendChild(botMsgDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
});
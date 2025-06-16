// Form elementlərini alırıq
const form = document.querySelector('.login-form'); 
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.querySelector('.submit-button');
const emailError = document.querySelector('.error-text_email');
const passwordError = document.querySelector('.error-text_password');

// Elementlərin tapıldığını yoxlayırıq
console.log('🔍 Elementlərin yoxlanılması:');
console.log('Form:', form);
console.log('Email input:', emailInput);
console.log('Password input:', passwordInput);
console.log('Submit button:', submitButton);


// Validasiya vəziyyətini saxlamaq üçün obyekt
const validation = {
    email: false,
    password: false
};


// Validasiya funksiyaları
function validateEmail(email, showError = false) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email) && email.length > 0;
    
    validation.email = isValid;
    
    if (showError) {
        if (!isValid) {
            showFieldError(emailInput, emailError, 'Düzgün email daxil edin');
        } else {
            showFieldSuccess(emailInput, emailError);
        }
    }
    
    return isValid;
}

function validatePassword(password, showError = false) {
    const isValid = password.length >= 6;
    
    validation.password = isValid;
    
    if (showError) {
        if (!isValid) {
            showFieldError(passwordInput, passwordError, 'Parol ən azı 6 simvol olmalıdır');
        } else {
            showFieldSuccess(passwordInput, passwordError);
        }
    }
    
    return isValid;
}

// İnterfeys ilə işləmək üçün funksiyalar
function showFieldError(input, errorElement, message) {
    if (input && errorElement) {
        input.classList.remove('success');
        input.classList.add('error');
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function showFieldSuccess(input, errorElement) {
    if (input && errorElement) {
        input.classList.remove('error');
        input.classList.add('success');
        errorElement.classList.remove('show');
    }
}

function clearFieldError(input, errorElement) {
    if (input && errorElement) {
        input.classList.remove('error', 'success');
        errorElement.classList.remove('show');
    }
}

function clearForm() {
    if (emailInput) emailInput.value = '';
    if (passwordInput) passwordInput.value = '';
    clearFieldError(emailInput, emailError);
    clearFieldError(passwordInput, passwordError);
    validation.email = false;
    validation.password = false;
    updateSubmitButton();
    console.log('🧹 Form təmizləndi');
}

function updateSubmitButton() {
    const isFormValid = validation.email && validation.password;
    if (submitButton) {
        submitButton.disabled = !isFormValid;
    }
}

// Giriş funksiyası (simulyasiya)
async function loginUser() {
    console.log('🔐 Giriş prosesi başlayır...');
    
    if (!submitButton) {
        console.error('❌ Submit düyməsi tapılmadı');
        return;
    }
    
    // Yükləmə indikatorunu göstəririk
    submitButton.classList.add('loading');
    submitButton.disabled = true;
    
    try {
        // Serverə sorğu simulyasiyası
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Form məlumatlarını alırıq
        const formData = {
            email: emailInput?.value || '',
            password: passwordInput?.value || ''
        };
        
        console.log('📤 Məlumatları göndəririk:', formData);
        
        // Sadə giriş yoxlaması
        if (formData.email === 'admin@example.com' && formData.password === '123456') {
            console.log('✅ Giriş uğurludur!');
            
            // İstifadəçi məlumatlarını sessionStorage-də saxlayırıq
            sessionStorage.setItem('user', JSON.stringify({
                email: formData.email,
                loginTime: new Date().toISOString()
            }));
            
            showNotification('Xoş gəlmisiniz! Yönləndirilir...', 'success');
            
            // todo.html səhifəsinə yönləndirmə
            setTimeout(() => {
                console.log('🔄 todo.html səhifəsinə yönləndirilir...');
                window.location.href = 'todo.html';
            }, 1500);
            
        } else {
            throw new Error('Yanlış email və ya parol');
        }
        
    } catch (error) {
        console.log('❌ Giriş xətası:', error.message);
        showNotification(error.message, 'error');
    } finally {
        // Yükləmə indikatorunu çıxarırıq
        submitButton.classList.remove('loading');
        submitButton.disabled = false;
    }
}

// Bildiriş göstərmə funksiyası
function showNotification(message, type = 'success') {
    // Mövcud bildirişləri silirik
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Yeni bildiriş yaradırıq
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Bildirişlər üçün stillər əlavə edirik
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: 600;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === 'success' ? 'background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);' : 'background: #ff6b6b;'}
    `;
    
    document.body.appendChild(notification);
    
    // Bildirişi göstəririk
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 3 saniyə sonra bildirişi çıxarırıq
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// 1. INPUT HADİSƏSİ - real vaxt validasiyası
emailInput?.addEventListener('input', (e) => {
    console.log('🎯 Email üzərində INPUT hadisəsi:', e.target.value);
    validateEmail(e.target.value);
    updateSubmitButton();
});

passwordInput?.addEventListener('input', (e) => {
    console.log('🎯 Password üzərində INPUT hadisəsi:', e.target.value.replace(/./g, '*'));
    validatePassword(e.target.value);
    updateSubmitButton();
});

// 2. BLUR HADİSƏSİ - fokus itirildikdə validasiya
emailInput?.addEventListener('blur', (e) => {
    console.log('👁️ Email üzərində BLUR hadisəsi');
    validateEmail(e.target.value, true);
});

passwordInput?.addEventListener('blur', (e) => {
    console.log('👁️ Password üzərində BLUR hadisəsi');
    validatePassword(e.target.value, true);
});

// 3. FOCUS HADİSƏSİ - fokus alındıqda xətaların təmizlənməsi
emailInput?.addEventListener('focus', (e) => {
    console.log('🎯 Email üzərində FOCUS hadisəsi');
    clearFieldError(emailInput, emailError);
});

passwordInput?.addEventListener('focus', (e) => {
    console.log('🎯 Password üzərində FOCUS hadisəsi');
    clearFieldError(passwordInput, passwordError);
});

// 4. SUBMIT HADİSƏSİ - DÜZƏLİŞ OLUNMUŞ VERSİYA
form?.addEventListener('submit', function(e) {
    console.log('🚀 Formun SUBMIT hadisəsi');
    
    // KRİTİK VACIB: formun standart göndərilməsini dayandırırıq
    e.preventDefault();
    e.stopPropagation();
    
    console.log('✋ preventDefault() icra edildi');
    
    // Göndərmədən əvvəl bütün sahələri validasiya edirik
    const emailValid = validateEmail(emailInput.value, true);
    const passwordValid = validatePassword(passwordInput.value, true);
    
    if (emailValid && passwordValid) {
        loginUser();
    } else {
        console.log('❌ Form validasiyadan keçmədi');
        showNotification('Formdakı xətaları düzəldin', 'error');
    }
    
    // Əlavə müdafiə üçün false qaytarırıq
    return false;
});

// 5. KLAVİATURA HADİSƏLƏRİ - qısa yol düymələri
document.addEventListener('keydown', (e) => {
    // İstənilən sahədə Enter = formun göndərilməsi
    if (e.key === 'Enter' && (e.target === emailInput || e.target === passwordInput)) {
        console.log('⌨️ KEYDOWN hadisəsi: Enter');
        e.preventDefault();
        if (form) {
            const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
            form.dispatchEvent(submitEvent);
        }
    }
    
    // Escape = formun təmizlənməsi
    if (e.key === 'Escape') {
        console.log('⌨️ KEYDOWN hadisəsi: Escape');
        clearForm();
    }
});


// 6. LOAD HADİSƏSİ - səhifə yükləndikdə inisializasiya
window.addEventListener('load', () => {
    console.log('🌍 LOAD hadisəsi: səhifə yükləndi');
    
    // Artıq avtorizasiya olunmuş istifadəçi olub-olmadığını yoxlayırıq
    const user = sessionStorage.getItem('user');
    if (user) {
        console.log('👤 Avtorizasiya olunmuş istifadəçi tapıldı');
        showNotification('Siz artıq avtorizasiya olunmusunuz! Yönləndirilir...', 'success');
        setTimeout(() => {
            window.location.href = 'todo.html';
        }, 1500);
        return;
    }
    
    // Email sahəsinə fokus qoyuruq
    if (emailInput) {
        emailInput.focus();
    }
});

// Test üçün demo məlumatlar
console.log('🎓 TEST ÜÇÜN DEMO MƏLUMATLAR:');
console.log('Email: admin@example.com');
console.log('Password: 123456');
console.log('');
console.log('📚 MÜŞAHİDƏ EDİLƏ BİLƏN HADİSƏLƏR:');
console.log('1. input - mətn daxil edildikdə');
console.log('2. focus/blur - fokus alındıqda/itirildikdə');
console.log('3. submit - form göndərildikdə');
console.log('4. keydown - düymələrə basıldıqda');
console.log('5. load - səhifə yükləndikdə');
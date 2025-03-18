const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Chào mừng đến với cửa hàng của chúng tôi!');
});

const users = [];

app.post('/register', (req, res) => {
    const { email, password } = req.body;
    const user = { email, password };
    users.push(user);
    res.status(201).send('Đăng ký thành công!');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.send('Đăng nhập thành công!');
    } else {
        res.status(401).send('Sai email hoặc mật khẩu!');
    }
});

app.get('/api/categories/:category', (req, res) => {
    const category = req.params.category;
    // Giả sử dữ liệu danh mục
    const data = {
        electronics: [{ name: 'Điện thoại' }, { name: 'Laptop' }],
        clothing: [{ name: 'Áo thun' }, { name: 'Quần jean' }],
        accessories: [{ name: 'Tai nghe' }, { name: 'Ốp lưng' }]
    };
    res.json(data[category] || []);
});

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
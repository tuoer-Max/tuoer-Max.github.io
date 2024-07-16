function simpleHash(str) {
    var hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash.toString();
}

function generateHTML() {
    var websiteTitle = document.getElementById('edit-website-title').value;
    var topTitle = document.getElementById('edit-title').value;
    var button1 = document.getElementById('edit-button1').value;
    var button2 = document.getElementById('edit-button2').value;
    var button3 = document.getElementById('edit-button3').value;
    var button3Title = document.getElementById('edit-button3-title').value;
    var password = document.getElementById('edit-password').value;
    var redirect = document.getElementById('edit-redirect').value;

    // Generate a random salt
    var salt = Math.random().toString(36).substring(2, 15);
    var saltedPassword = password + salt;
    var hashedPassword = simpleHash(saltedPassword); // Hash the salted password

    var today = new Date();
    var dateStr = (today.getMonth() + 1) + '.' + today.getDate();

    var generatedHTML = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="referrer" content="no-referrer">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover, minimal-ui">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="format-detection" content="telephone=no">
    <title>${websiteTitle}</title>
    <link rel="icon" href="https://api.uomg.com/api/rand.avatar?sort=%E5%8A%A8%E6%BC%AB%E5%A5%B3">
    <meta name="description" content="">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${websiteTitle}">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://api.uomg.com/api/rand.avatar?sort=%E5%8A%A8%E6%BC%AB%E5%A5%B3">
    <style>
        body {
            background-color: #ffffff;
            font-family: 'Microsoft Yahei', 微软雅黑, 'Helvetica Neue', Helvetica, Arial, sans-serif;
            line-height: 1.5715;
            font-size: 1.12em;
            letter-spacing: 1px;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: #333;
        }
        .card-box {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .card {
            background-color: white;
            border: 1px solid #e0e0e0;
            border-radius: 10px;
            width: 85%;
            height: 600px;
            padding: 20px;
            text-align: center;
            box-shadow: 0 2px 8px -2px rgb(0 0 0 / 5%), 0 1px 4px -1px rgb(25 15 15 / 7%), 0 0 1px 0 rgb(0 0 0 / 8%);
        }
        #title {
            color: #FF0000;
            font-weight: 500;
            line-height: 44.3123px;
            height: 44.3123px;
            font-size: 24px;
        }
        button {
            width: 70%;
            background: #07C160;
            font-size: 18px;
            height: 48px;
            padding: 2px 15px 6px 15px;
            border-radius: 5px;
            outline: none;
            display: inline-block;
            font-weight: bold;
            white-space: nowrap;
            text-align: center;
            border: 1px solid transparent;
            box-shadow: 0.5px 0.5px 4px #999999;
            cursor: pointer;
            transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
            line-height: 1.5714285714285714;
            color: #fff;
            letter-spacing: 2px;
            margin-top: 20px;
        }

        button:nth-of-type(2) {
            background: #f4f5f7;
            color: #07C160;
        }

        button:nth-of-type(3) {
            background: #fdc308;
            color: darkslategrey;
        }

        .confirm-button {
            width: 33.33%;
            background: #07C160;
            font-size: 18px;
            height: 48px;
            padding: 2px 15px 6px 15px;
            border-radius: 5px;
            outline: none;
            display: block;
            font-weight: bold;
            white-space: nowrap;
            text-align: center;
            border: 1px solid transparent;
            box-shadow: 0.5px 0.5px 4px #999999;
            cursor: pointer;
            transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
            line-height: 1.5714285714285714;
            color: #fff;
            letter-spacing: 2px;
            margin: 20px auto;
        }

        input {
            width: 75%;
            padding: 4px 11px;
            font-size: 18px;
            line-height: 1.97;
            background-color: #f7f7f7;
            border: 1px solid #d9d9d9;
            border-radius: 2px;
            transition: all 0.2s;
            display: inline-block;
            vertical-align: middle;
        }

        input:focus,
        input:hover {
            border-color: #4096ff;
            box-shadow: 0 0 0 2px rgb(5, 145, 255 / 10%);
            outline: 0;
        }

        ::placeholder {
            color: darkgray;
        }

        .message-box {
            background-color: #fef0f0 !important;
            width: 200px;
            text-align: center;
            margin-top: 5px;
            border: 1px solid #fde2e2;
            padding: 10px 10px 14px 10px;
            font-size: 16px;
            border-radius: 5px;
            color: #f56c6c;
        }

        .input-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .input-container img {
            width: 40px;
            height: 35px;
            margin-left: 10px;
            vertical-align: middle;
        }

        .gif-doll {
            position: fixed;
            bottom: 10px;
            right: 10px;
            width: 110px;
            height: 110px;
        }
    </style>
</head>
<body>
    <div class="card-box">
        <div class="card">
            <img src="https://qqq.gtimg.cn/music/photo_new/T053XD000000rf0jH3oSJPD.gif" style="width: auto; height: auto; max-width: 100px; max-height: 100px;" alt="">
            <div id="title">${topTitle}</div>
            <div class="input-container" style="margin-top: 20px;">
                <input type="text" id="passwordInput" maxlength="10" placeholder="输入密码即可进入">
            </div>
            <button class="confirm-button" onclick="checkPassword()">确定</button>
            <div id="msg" style="position: absolute; left: 50%; transform: translateX(-50%); background-color: transparent;"></div>
            <div style="margin-top: 20px; color: #FF0000;" id="message-text">
                我们始终相信为长期爱发电不会长久，加入广告才能持续保持网站运营,感谢理解
            </div>
            <div class="center" style="margin-top: 30px;">
                <button onclick="window.location.href='${button1}'" id="button1">点击获取密码</button>
                <button onclick="window.location.href='${button2}'" id="button2">获取密码教程</button>
                <button onclick="window.location.href='${button3}'" id="button3">${button3Title}</button>
            </div>
        </div>
    </div>

    <script>
        function simpleHash(str) {
            var hash = 0, i, chr;
            if (str.length === 0) return hash;
            for (i = 0; i < str.length; i++) {
                chr = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + chr;
                hash |= 0; // Convert to 32bit integer
            }
            return hash.toString();
        }

        function checkPassword() {
            var input = document.getElementById('passwordInput').value;
            var salt = '${salt}';
            var hashedInput = simpleHash(input + salt);
            var correctPassword = '${hashedPassword}';
            if (hashedInput === correctPassword) {
                window.location.href = '${redirect}';
            } else {
                var msgDiv = document.getElementById('msg');
                msgDiv.innerHTML = '<div class="message-box">密码错误</div>';
            }
        }
    </script>
</body>
</html>`;

    var blob = new Blob([generatedHTML], { type: "text/html" });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = dateStr + ".html";
    link.click();
}

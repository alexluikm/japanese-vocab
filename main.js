document.addEventListener('DOMContentLoaded', () => {
    console.log("頁面已加載！");

    let markedWords = []; // 儲存需要溫習的詞語
    let selectedWordsForMemory = []; // 儲存玩家選擇的 30 個詞語

    // 從 localStorage 中讀取用戶選擇的詞語
    const storedSelectedWords = localStorage.getItem('selectedWords');
    if (storedSelectedWords) {
        selectedWordsForMemory = JSON.parse(storedSelectedWords);
        console.log("已讀取選擇的詞語：", selectedWordsForMemory); // 調試用
    } else {
        alert("請先選擇詞語！");
        window.location.href = 'index.html'; // 如果沒有選擇詞語，跳轉回選擇頁面
    }

    // 獲取所有分類
    const categories = [...new Set(selectedWordsForMemory.map(word => word.category))];

    // 動態生成分類選項
    function generateCategorySelectors(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        categories.forEach(category => {
            const label = document.createElement('label');
            label.innerHTML = `
                <input type="checkbox" name="category" value="${category}" checked> ${category}
            `;
            container.appendChild(label);
        });
        const startButton = document.createElement('button');
        startButton.id = 'start';
        startButton.textContent = '開始練習';
        container.appendChild(startButton);

        // 綁定開始練習按鈕的點擊事件
        startButton.addEventListener('click', () => {
            startPractice(containerId);
        });
    }

    // 開始練習
    function startPractice(containerId) {
        const selectedCategories = Array.from(document.querySelectorAll(`#${containerId} input[name="category"]:checked`))
            .map(input => input.value);

        console.log("已選擇的分類：", selectedCategories); // 調試用

        // 過濾出符合選擇分類的單字
        const filteredWords = selectedWordsForMemory.filter(word => selectedCategories.includes(word.category));
        console.log("記憶模式過濾後的詞語：", filteredWords); // 調試用

        // 如果過濾後的詞語數量為 0，顯示提示並返回
        if (filteredWords.length === 0) {
            alert("沒有符合選擇分類的詞語，請重新選擇分類！");
            return;
        }

        // 從符合分類的單字中隨機選取最多 20 個
        const selectedWords = getRandomWords(filteredWords, Math.min(20, filteredWords.length));
        console.log("最終選擇的詞語：", selectedWords); // 調試用

        displayMemoryMode(selectedWords);
    }

    // 記憶模式顯示
    function displayMemoryMode(selectedWords) {
        const memoryHiraganaLeftDiv = document.getElementById('memory-hiragana-left');
        const memoryHiraganaRightDiv = document.getElementById('memory-hiragana-right');
        memoryHiraganaLeftDiv.innerHTML = '<h2>平假名（左）</h2>';
        memoryHiraganaRightDiv.innerHTML = '<h2>平假名（右）</h2>';

        // 計算左右兩欄的詞語數量
        const totalWords = selectedWords.length;
        const leftCount = Math.ceil(totalWords / 2); // 左欄詞語數量
        const rightCount = totalWords - leftCount;   // 右欄詞語數量

        // 將詞語分為左右兩欄
        const leftWords = selectedWords.slice(0, leftCount);
        const rightWords = selectedWords.slice(leftCount, totalWords);

        // 顯示左欄詞語
        leftWords.forEach(word => {
            const wordContainer = document.createElement('div');
            wordContainer.className = 'word-container';

            const hiraganaElement = document.createElement('div');
            hiraganaElement.textContent = word.hiragana;
            hiraganaElement.dataset.kanji = word.kanji;
            hiraganaElement.dataset.hiragana = word.hiragana;

            // 點擊顯示詞語
            hiraganaElement.addEventListener('click', () => {
                if (hiraganaElement.textContent === word.hiragana) {
                    hiraganaElement.textContent = word.kanji;
                } else {
                    hiraganaElement.textContent = word.hiragana;
                }
            });

            // 標示按鈕
            const markButton = document.createElement('button');
            markButton.textContent = '標示';
            if (markedWords.includes(word.kanji)) {
                markButton.classList.add('marked');
                markButton.textContent = '已標示';
            }
            markButton.addEventListener('click', () => {
                if (!markedWords.includes(word.kanji)) {
                    markedWords.push(word.kanji);
                    markButton.classList.add('marked');
                    markButton.textContent = '已標示';
                } else {
                    markedWords = markedWords.filter(kanji => kanji !== word.kanji);
                    markButton.classList.remove('marked');
                    markButton.textContent = '標示';
                }
            });

            wordContainer.appendChild(hiraganaElement);
            wordContainer.appendChild(markButton); // 只添加標示按鈕
            memoryHiraganaLeftDiv.appendChild(wordContainer);
        });

        // 顯示右欄詞語
        rightWords.forEach(word => {
            const wordContainer = document.createElement('div');
            wordContainer.className = 'word-container';

            const hiraganaElement = document.createElement('div');
            hiraganaElement.textContent = word.hiragana;
            hiraganaElement.dataset.kanji = word.kanji;
            hiraganaElement.dataset.hiragana = word.hiragana;

            // 點擊顯示詞語
            hiraganaElement.addEventListener('click', () => {
                if (hiraganaElement.textContent === word.hiragana) {
                    hiraganaElement.textContent = word.kanji;
                } else {
                    hiraganaElement.textContent = word.hiragana;
                }
            });

            // 標示按鈕
            const markButton = document.createElement('button');
            markButton.textContent = '標示';
            if (markedWords.includes(word.kanji)) {
                markButton.classList.add('marked');
                markButton.textContent = '已標示';
            }
            markButton.addEventListener('click', () => {
                if (!markedWords.includes(word.kanji)) {
                    markedWords.push(word.kanji);
                    markButton.classList.add('marked');
                    markButton.textContent = '已標示';
                } else {
                    markedWords = markedWords.filter(kanji => kanji !== word.kanji);
                    markButton.classList.remove('marked');
                    markButton.textContent = '標示';
                }
            });

            wordContainer.appendChild(hiraganaElement);
            wordContainer.appendChild(markButton); // 只添加標示按鈕
            memoryHiraganaRightDiv.appendChild(wordContainer);
        });

        console.log("記憶模式已顯示詞語：", selectedWords); // 調試用
    }

    // 隨機選擇單字
    function getRandomWords(words, count) {
        if (words.length <= count) {
            return words; // 如果詞語數量少於或等於需要的數量，直接返回所有詞語
        }
        const shuffled = words.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    // 重發（記憶模式）
    document.getElementById('reset-memory').addEventListener('click', () => {
        const selectedCategories = Array.from(document.querySelectorAll('#memory-category-selector input[name="category"]:checked'))
            .map(input => input.value);

        // 過濾出符合選擇分類的單字
        let filteredWords = selectedWordsForMemory.filter(word => selectedCategories.includes(word.category));

        // 優先顯示已標示的詞語
        const markedFilteredWords = filteredWords.filter(word => markedWords.includes(word.kanji));

        // 如果已標示的詞語不足 20 個，補充其他隨機詞語
        const remainingSlots = 20 - markedFilteredWords.length;
        const otherWords = filteredWords.filter(word => !markedWords.includes(word.kanji));
        const randomOtherWords = getRandomWords(otherWords, remainingSlots);

        const selectedWords = [...markedFilteredWords, ...randomOtherWords].slice(0, 20);

        displayMemoryMode(selectedWords);
    });

    // 重新選擇詞語（記憶模式）
    document.getElementById('reset-memory-selection').addEventListener('click', () => {
        window.location.href = 'index.html'; // 跳轉到詞語選擇頁面
    });

    // 初始化分類選項
    generateCategorySelectors('memory-category-selector');
});
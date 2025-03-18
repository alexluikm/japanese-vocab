document.addEventListener('DOMContentLoaded', () => {
    console.log("頁面已加載！");

    let currentMode = null;
    let markedWords = []; // 儲存需要溫習的詞語
    let selectedWordsForMemory = []; // 儲存玩家選擇的 30 個詞語

    // 獲取所有分類
    const categories = [...new Set(words.map(word => word.category))];

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

    // 模式選擇
    document.getElementById('mode-pair').addEventListener('click', () => {
        currentMode = 'pair';
        document.getElementById('pair-mode').classList.remove('hidden');
        document.getElementById('memory-mode').classList.add('hidden');
        generateCategorySelectors('category-selector');
    });

    document.getElementById('mode-memory').addEventListener('click', () => {
        currentMode = 'memory';
        document.getElementById('memory-mode').classList.remove('hidden');
        document.getElementById('pair-mode').classList.add('hidden');
        showWordSelection(); // 顯示詞語選擇介面
    });

    // 顯示詞語選擇介面
    function showWordSelection() {
        document.getElementById('word-selection').classList.remove('hidden');
        document.getElementById('memory-category-selector').classList.add('hidden');
        document.getElementById('memory-hiragana-left').innerHTML = '<h2>平假名（左）</h2>';
        document.getElementById('memory-hiragana-right').innerHTML = '<h2>平假名（右）</h2>';
        document.getElementById('counter').textContent = 30; // 初始化計數器
        generateWordSelectionCards();
    }

    // 生成詞語選擇卡片
    function generateWordSelectionCards() {
        const wordSelectionList = document.getElementById('word-selection-list');
        wordSelectionList.innerHTML = '';
        words.forEach(word => {
            const card = document.createElement('div');
            card.className = 'word-card';
            card.innerHTML = `
                <div>
                    <input type="checkbox" id="${word.kanji}" value="${word.kanji}">
                    <label for="${word.kanji}">
                        <div class="kanji">${word.kanji}</div>
                        <div class="hiragana">${word.hiragana}</div>
                        <div class="category">${word.category}</div>
                    </label>
                </div>
            `;
            wordSelectionList.appendChild(card);

            // 綁定選擇框的點擊事件
            const checkbox = card.querySelector('input[type="checkbox"]');
            checkbox.addEventListener('click', () => {
                updateCounter(checkbox.checked);
            });
        });
    }

    // 更新計數器
    function updateCounter(isChecked) {
        const counter = document.getElementById('counter');
        let remaining = parseInt(counter.textContent);

        if (isChecked) {
            remaining -= 1; // 選擇了一個詞語
        } else {
            remaining += 1; // 取消選擇了一個詞語
        }

        counter.textContent = remaining;

        // 如果剩餘可選詞語為 0，禁用未選中的選擇框
        const checkboxes = document.querySelectorAll('#word-selection-list input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            if (remaining === 0 && !checkbox.checked) {
                checkbox.disabled = true;
            } else {
                checkbox.disabled = false;
            }
        });
    }

    // 確認選擇
    document.getElementById('confirm-selection').addEventListener('click', () => {
        const selectedWords = Array.from(document.querySelectorAll('#word-selection-list input[type="checkbox"]:checked'))
            .map(input => words.find(word => word.kanji === input.value));

        if (selectedWords.length > 30) {
            alert("請選擇最多 30 個詞語！");
            return;
        }

        selectedWordsForMemory = selectedWords.length > 0 ? selectedWords : getRandomWords(words, 30);
        document.getElementById('word-selection').classList.add('hidden');
        document.getElementById('memory-category-selector').classList.remove('hidden');
        document.getElementById('counter').textContent = 30; // 重置計數器
        generateCategorySelectors('memory-category-selector');
    });

    // 開始練習
    function startPractice(containerId) {
        const selectedCategories = Array.from(document.querySelectorAll(`#${containerId} input[name="category"]:checked`))
            .map(input => input.value);

        // 過濾出符合選擇分類的單字
        let filteredWords = currentMode === 'memory' ? selectedWordsForMemory : words.filter(word => selectedCategories.includes(word.category));

        // 從符合分類的單字中隨機選取 20 個
        const selectedWords = getRandomWords(filteredWords, 20);

        if (currentMode === 'pair') {
            displayPairMode(selectedWords);
        } else if (currentMode === 'memory') {
            displayMemoryMode(selectedWords);
        }
    }

    // 配對模式顯示
    function displayPairMode(selectedWords) {
        const hiraganaList = selectedWords.map(word => word.hiragana);
        const shuffledHiragana = hiraganaList.sort(() => 0.5 - Math.random());

        const wordsDiv = document.getElementById('words');
        const hiraganaDiv = document.getElementById('hiragana');

        wordsDiv.innerHTML = '<h2>詞語</h2>';
        hiraganaDiv.innerHTML = '<h2>平假名</h2>';

        selectedWords.forEach(word => {
            const wordElement = document.createElement('div');
            wordElement.textContent = word.kanji;
            wordElement.dataset.hiragana = word.hiragana;
            wordsDiv.appendChild(wordElement);
        });

        shuffledHiragana.forEach(hiragana => {
            const hiraganaElement = document.createElement('div');
            hiraganaElement.textContent = hiragana;
            hiraganaDiv.appendChild(hiraganaElement);
        });

        addClickEvents();
    }

    // 記憶模式顯示
    function displayMemoryMode(selectedWords) {
        const memoryHiraganaLeftDiv = document.getElementById('memory-hiragana-left');
        const memoryHiraganaRightDiv = document.getElementById('memory-hiragana-right');
        memoryHiraganaLeftDiv.innerHTML = '<h2>平假名（左）</h2>';
        memoryHiraganaRightDiv.innerHTML = '<h2>平假名（右）</h2>';

        // 將 20 個詞語分為左右兩欄
        const leftWords = selectedWords.slice(0, 10);
        const rightWords = selectedWords.slice(10, 20);

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
            wordContainer.appendChild(markButton);
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
            wordContainer.appendChild(markButton);
            memoryHiraganaRightDiv.appendChild(wordContainer);
        });

        // 添加「重新選擇詞語」按鈕
        const resetSelectionButton = document.createElement('button');
        resetSelectionButton.textContent = '重新選擇詞語';
        resetSelectionButton.id = 'reset-selection';
        resetSelectionButton.addEventListener('click', () => {
            showWordSelection(); // 回到詞語選擇介面
        });

        // 移除舊的「重新選擇詞語」按鈕（如果存在）
        const oldResetButton = document.getElementById('reset-selection');
        if (oldResetButton) {
            oldResetButton.remove();
        }

        // 添加新的「重新選擇詞語」按鈕
        document.getElementById('memory-mode').appendChild(resetSelectionButton);
    }

    // 隨機選擇單字
    function getRandomWords(words, count) {
        const shuffled = words.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    // 添加點擊事件（配對模式）
    function addClickEvents() {
        const wordElements = document.querySelectorAll('#words div');
        const hiraganaElements = document.querySelectorAll('#hiragana div');

        let selectedWord = null;
        let selectedHiragana = null;

        wordElements.forEach(word => {
            word.addEventListener('click', () => {
                if (!word.classList.contains('matched')) {
                    wordElements.forEach(w => w.classList.remove('selected'));
                    word.classList.add('selected');
                    selectedWord = word;
                    checkMatch();
                }
            });
        });

        hiraganaElements.forEach(hiragana => {
            hiragana.addEventListener('click', () => {
                if (!hiragana.classList.contains('matched')) {
                    hiraganaElements.forEach(h => h.classList.remove('selected'));
                    hiragana.classList.add('selected');
                    selectedHiragana = hiragana;
                    checkMatch();
                }
            });
        });

        function checkMatch() {
            if (selectedWord && selectedHiragana) {
                if (selectedWord.dataset.hiragana === selectedHiragana.textContent) {
                    document.getElementById('result').textContent = "正確！";
                    selectedWord.classList.remove('selected');
                    selectedHiragana.classList.remove('selected');
                    selectedWord.classList.add('matched');
                    selectedHiragana.classList.add('matched');
                    selectedWord = null;
                    selectedHiragana = null;
                } else {
                    document.getElementById('result').textContent = "錯誤，請再試一次！";
                }
            }
        }
    }

    // 檢查答案（配對模式）
    document.getElementById('check').addEventListener('click', () => {
        const unmatchedWords = document.querySelectorAll('#words div:not(.matched)');
        if (unmatchedWords.length === 0) {
            document.getElementById('result').textContent = "全部正確！太棒了！";
        } else {
            document.getElementById('result').textContent = "還有未完成的配對哦！";
        }
    });

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
});
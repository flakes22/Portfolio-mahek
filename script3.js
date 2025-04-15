function analyzeText() {
    const text = document.getElementById('inputText').value;

    const letters = (text.match(/[a-zA-Z]/g) || []).length;
    const words = (text.trim().match(/\b\w+\b/g) || []).length;
    const spaces = (text.match(/ /g) || []).length;
    const newlines = (text.match(/\n/g) || []).length;
    const specialSymbols = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;

    const tokens = text.toLowerCase().match(/\b[a-z]+\b/g) || [];

    const pronouns = ['i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them', 'my', 'your', 'his', 'its', 'our', 'their', 'mine', 'yours', 'hers', 'ours', 'theirs'];
    const prepositions = ['in', 'on', 'at', 'by', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'over', 'under', 'again', 'off', 'near'];
    const articles = ['a', 'an'];

    const pronounCount = {};
    const prepositionCount = {};
    const articleCount = {};

    for (const word of tokens) {
        if (pronouns.includes(word)) {
            pronounCount[word] = (pronounCount[word] || 0) + 1;
        }
        if (prepositions.includes(word)) {
            prepositionCount[word] = (prepositionCount[word] || 0) + 1;
        }
        if (articles.includes(word)) {
            articleCount[word] = (articleCount[word] || 0) + 1;
        }
    }

    const output = `
Letters: ${letters}
Words: ${words}
Spaces: ${spaces}
Newlines: ${newlines}
Special Symbols: ${specialSymbols}

--- Pronouns Count ---
${Object.entries(pronounCount).map(([k, v]) => `${k}: ${v}`).join('\n')}

--- Prepositions Count ---
${Object.entries(prepositionCount).map(([k, v]) => `${k}: ${v}`).join('\n')}

--- Indefinite Articles Count ---
${Object.entries(articleCount).map(([k, v]) => `${k}: ${v}`).join('\n')}
`;

    document.getElementById('output').textContent = output;

    // Show success popup
    alert("Text analysing successful!");
}

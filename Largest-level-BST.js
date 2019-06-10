let largestLevel = (tree) => {
    const levels = {};
    let level = 0, max = 0, result = null;

    treeIterator = (node = tree) => {
        level++
        if (node.left) { treeIterator(node.left) }
        if (node.right) { treeIterator(node.right) }

        if (levels.hasOwnProperty(level)) {
            levels[level] += node.value;
        } else { levels[level] = node.value; }

        if (levels[level] > max) { 
            max = levels[level];
            result = level
         }
        level--
    };

    
    return result;
}


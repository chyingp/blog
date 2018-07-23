// 堆排序
// 满二叉树：一个深度为k，节点个数为 2^k - 1 的二叉树为满二叉树。
// 完全二叉树：
// 堆

function buildMaxHeap (arr) {
    // 假设父节点索引为i，则 left子节点索引为 2*i + 1，right子节点索引为 2*i + 2
    // 那么，需符合 2*i + 1 <= len - 1 （可能最后一棵子树，只有 left子节点，没有 right子节点）
    // 推导出：i <= len/2 - 1
    let len = arr.length;
    for (let i = Math.floor(len/2) - 1; i >=0; i--) {
        heapify(arr, i, len);
    }
    return arr;
}

function heapify (arr, i, len) {
    let maxIndex = i;
    let left = i * 2 + 1;
    let right = i * 2 + 2;

    if (left < len && arr[left] > arr[maxIndex]) {
        maxIndex = left;
    }

    if (right < len && arr[right] > arr[maxIndex]) {
        maxIndex = right;
    }

    if (maxIndex !== i) {
        swap(arr, i, maxIndex);
        heapify(arr, maxIndex, len); // 备注：通过 heapify 交换父、子节点后，可能导致 原先为最大堆的子树 不符合最大 堆要求，因此需要重新 heapify
    }
}

function swap (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// 堆排序
function heapSort (arr) {
    
    let len = arr.length;
    
    arr = buildMaxHeap(arr);

    for (let i = len - 1; i >0; i--) {
        swap(arr, 0, i);
        heapify(arr, 0, --len); // 备注，这里的 len 每循环一次，需要 -1，否则最后一个元素（最大值）通过 heapify 又会被提到第一个元素
    }

    return arr;
}


// let arr = [20, 50, 20, 40, 70, 10, 80, 30, 60];
// let sorted = heapSort(arr);

// console.log(sorted);

exports.heapSort = heapSort;
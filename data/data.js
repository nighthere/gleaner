/**
 *
 * Created by hywilliam on 7/21/15.
 */

/**
 * ==================================================
 *                   数据持久层
 * ==================================================
 * 1，如果用后端，这里就是ajax请求与响应，
 * 2，如果用LocalStorage，这里就是其读取和存入
 * 3，如果用.json站内存，那这里就是json文件的操作
 * 4，如果什么都不用，那模拟数据就存在这里，但是一刷新用户操作的数据就会丢失
 *
 * 但总而言之：
 * 本文件对外展现就是一个data数组，内部每一个元素为一个notebook对象
 * */

var data = [];
//window.localStorage

/**
 * ==================================================
 *            1，Ajax，如果不用请注释
 * ==================================================
 * *

 /**
 * ==================================================
 *            2，LocalStorage操作，如果不用请注释
 * ==================================================
 * */

/**
 * ==================================================
 *            3，data.json操作，如果不用请注释
 * ==================================================
 * */
/**
 * ==================================================
 *            4，模拟数据初始化，如果不用请注释
 * ==================================================
 * */
function initData(data) {
    var notebooks = ['常用分组', '成长笔记', '技术记录', 'Baidu-ife'];
    var notes = ['这我的一个笔记', '这我的一个笔记', '这我的一个笔记', '这我的一个笔记', '这我的一个笔记'];
    var content = '我们要让每段文字开头缩进，并且可以控制缩进距离我使用text-indent缩进单词。如果不想使用text-indent样式进行缩进，我可以使用空格来实现，但需要多打几个html空格字符“&nbsp;”实现空格字符占位缩进，你可以详细了解html多空格字符应用。';
    notebooks.forEach(function (val, i) {
        var thisnb = newNotebook(val);
        notes.forEach(function (val, j) {
            thisnb.newNote(val).setContent(content);
//            console.log(thisnb);
        });
    });
    return data;
}

initData(data);

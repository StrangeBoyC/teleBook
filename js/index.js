$(function () {
    let arr = [
        {
            name:'成铭铭', tell:15835699676, py:'chengmingming'
        },
        {
            name:'杨欣', tell:18406586055, py:'yangxin'
        },
        {
            name:'张振华', tell:15135171215, py:'zhangzhenhua'
        },
        {
            name:'李潇宇', tell:13546311471, py:'lixiaoyu'
        },
        {
            name:'张毓', tell:18803543319, py:'zhangyu'
        },
        {
            name:'韩裕', tell:13714981130, py:'hanyu'
        },
        {
            name:'高超', tell:18234796332, py:'gaochao'
        },
        {
            name:'李众', tell:13834669654, py:'lizhong'
        },
        {
            name:'成铭铭2', tell:15835699670, py:'chengmingming2'
        },
        {
            name:'杨欣2', tell:18406586050, py:'yangxin2'
        },
        {
            name:'张振华2', tell:15135171210, py:'zhangzhenhua2'
        },
        {
            name:'李潇宇2', tell:13546311470, py:'lixiaoyu2'
        },
        {
            name:'张毓2', tell:18803543310, py:'zhangyu2'
        },
        {
            name:'韩裕2', tell:13714981100, py:'hanyu2'
        },
        {
            name:'高超2', tell:18234796330, py:'gaochao2'
        },
        {
            name:'李众2', tell:13834669650, py:'lizhong2'
        },
        {
            name:'成铭铭', tell:15835699676, py:'chengmingming'
        },
        {
            name:'杨欣', tell:18406586055, py:'yangxin'
        },
        {
            name:'张振华', tell:15135171215, py:'zhangzhenhua'
        },
        {
            name:'李潇宇', tell:13546311471, py:'lixiaoyu'
        },
        {
            name:'张毓', tell:18803543319, py:'zhangyu'
        },
        {
            name:'韩裕', tell:13714981130, py:'hanyu'
        },
        {
            name:'高超', tell:18234796332, py:'gaochao'
        },
        {
            name:'李众', tell:13834669654, py:'lizhong'
        },
        {
            name:'成铭铭2', tell:15835699670, py:'chengmingming2'
        },
        {
            name:'杨欣2', tell:18406586050, py:'yangxin2'
        },
        {
            name:'张振华2', tell:15135171210, py:'zhangzhenhua2'
        },
        {
            name:'李潇宇2', tell:13546311470, py:'lixiaoyu2'
        },
        {
            name:'张毓2', tell:18803543310, py:'zhangyu2'
        },
        {
            name:'韩裕2', tell:13714981100, py:'hanyu2'
        },
        {
            name:'高超2', tell:18234796330, py:'gaochao2'
        },
        {
            name:'李众2', tell:13834669650, py:'lizhong2'
        },

    ]
    let main = $('main');
    let aside =$('.aside');
    let input = $('input');

    input.on('input',function () {
        let val =$(this).val();
        let newarr = arr.filter(ele=>ele.name.includes(val) || ele.py.includes(val));
        render(newarr);
    })

    render(arr);

    function render(arr) {
        main.empty();
        aside.empty();
        let person = {}
        arr.forEach(ele => {
            let firstChar = ele.py.charAt(0).toUpperCase();
            if (!person[firstChar]) {
                person[firstChar] = [];
            }
            person[firstChar].push(ele);
        })

        let keyArr = Object.keys(person).sort();

        let html = '';
        let htmlli = '';
        for (let i = 0; i < keyArr.length; i++) {
            let ele = keyArr[i];

            html += `
            <section>
            <a name="${ele}"></a>
            <h2 class="title">${ele}</h2>
            <ul>
        `
            for (let j = 0; j < person[ele].length; j++) {
                let info = person[ele][j];
                html += `
            <li><a href="tel:${info.tell}">${info.name}</a></li>
            `
            }
            html += `</ul></section>`;
            htmlli +=`<li><a href="#${ele}">${ele}</a></li>`;
        }
        aside.html(htmlli);
        main.html(html);
    }
})


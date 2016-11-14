// 初始化代码:
'use strict';
 $(function () {
    var vm = new Vue({
        el: '#vm',
        data: {
            name: 'Robot',
            age: 15,
            show: false,
            ok:false,
            city: 'sh',
            item: {
                id: '',
                province: ''
            },
            items: [
            ]
        },
        methods: {
            register: function () {
                // 显示JSON格式的Model:
                alert(JSON.stringify(this.$data));
                // TODO: AJAX POST...
            },
            save: function () {
                if (this.item.id == "" || this.item.province =="") {
                    alert('请输入完整案例信息')
                }
                else {
                    this.items.push(this.item);
                    //将input中的数据重置
                    this.item = {};
                    vm.show = false;
                }
            },
            getItem: function () {
                $.ajax({
                    type: "GET",
                    url: 'http://www.bizideal.cn:8082/userManager/province/getlist.do',
                    dataType: "json",
                    success: function (data) {
                        var obj = jQuery.parseJSON(data);
                        for (var i in obj) {
                            vm.items.push(obj[i]);
                        }
                    }
                });
            },
            removeItem: function () {
                vm.items = [];
            },
            delItem: function (index) {
                this.items.splice(index, 1)
            }
        }
    });
    window.vm = vm;

})

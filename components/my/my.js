// components/my/my.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        data: {
            userInfo: {},
            hasUserInfo: false,
            showAbout: false,
            showUpdate: false,
            confirmBtn: { content: '知道了', variant: 'base' },
        },

    },

    /**
     * 组件的方法列表
     */
    methods: {
        setABoutVisible:function(){
            this.setData({
                showAbout: true,
                dialogKey: 'showAbout'
            })
        },
        closeAboutDialog:function(){
            this.setData({
                showAbout: false,
            })
        },
        setUpdateVisible:function(){
            this.setData({
                showUpdate: true,
            })
        },
        closeUpdateDialog:function(){
            this.setData({
                showUpdate: false,
            })
        }


    },
    lifetimes: {
        attached:function(){
            let that = this;

            wx.getStorage({
                key: 'userInfo',
                success (res) {
                  console.log(res.data)
                  that.setData({
                      userInfo: res.data
                  })
                  
                }
              })

        }
    }
})

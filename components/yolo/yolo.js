// components/yolo/yolo.js
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
        userInfo: {},
        hasUserInfo: false,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        getUserProfile(e) {
            // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
            wx.getUserProfile({
              desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
              success: (res) => {
                console.log(res)
                this.setData({
                  userInfo: res.userInfo,
                  hasUserInfo: true
                })
                wx.setStorage({
                    key: "userInfo",
                    data: this.data.userInfo
                })
              }
            })
        },
        getImageFromAlbum(e) {
            wx.chooseMedia({
                count: 9,
                mediaType: ['image'],
                sourceType: ['album'],
                maxDuration: 30,
                camera: 'back',
                success(res) {
                  console.log(res)
                  console.log(res.tempFiles[0].tempFilePath)
                  wx.uploadFile({
                    url: 'https://127.0.0.1/yolov5', //仅为示例，非真实的接口地址
                    filePath: tempFilePaths[0],
                    name: 'file',
                    success (res){
                        console.log(res);
                        const data = res.data
                      //do something
                    }
                  })
                }
              })


            // wx.chooseImage({
            //     count: 1,
            //     success: (res) => {
            //       console.log(res);
            //       wx.uploadFile({ //把临时图片上传到服务器
            //         url: "http:127.0.0.1/yolov5",
            //         filePath: res.tempFilePaths[0],
            //         file: res.tempFilePaths[0],
            //         name: 'file',
            //         formData: {
            //           app: 3,
            //         },
            //         success: (res) => {
            //           // console.log(res);
            //           let updata = JSON.parse(res.data);
            //           console.log(updata);
                      
            //         }
            //       })

            //     }
            //   })

        }
    }
})
// 通知
export const confirm = (config) => {
    let obj = {
        title: '弹窗标题',
        content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
        confirmText: "確定",
        cancelText: "取消",
        success: (res) => {
            return new Promis ((resolve, reject) => {
                if (res.confirm) {
                    resolve(res)
                } else {
                    reject(res)
                }
            }) 
        }
    }
    obj = Object.assign(obj, config);
    wx.showModal(obj);
}

// 強提示
export const alert = (config) => {
    let obj = {
        title: '弹窗标题',
        content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
        showCancel: false,
        success: (res) => {
            return new Promis ((resolve, reject) => {
                if (res.confirm) {
                    resolve(res)
                } else {
                    reject(res)
                }
            }) 
        }
    }
    obj = Object.assign(obj, config);
    wx.showModal(obj);
}
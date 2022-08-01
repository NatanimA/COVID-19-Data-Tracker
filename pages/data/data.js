Page({

  // ----- Page Data -----
  data: {
	test: "Hello World",	
  },

  // ----- Custom Functions -----
  fetchData: function () {
    
    wx.request({
	  url: 'https://lab.isaaclin.cn/nCoV/api/overall',
	  
	  
	  success: (res) => {
		
		let result = res.data.results[0];
		this.setData({result});
		
		
		
	  }
	})

  },

  // ----- Lifecycle Function -----
  onLoad: function () {
    
  }
})
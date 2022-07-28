export default {
	// 可以以页面为单位来写，比如首页的内容，写在index字段，共同部分写在common部分
	common: {
		inputl: "Transfer Out Quantity",
		inputr: "Received Quantity",
		title1: "Exchange Rate",
		title2: "Handling Fee",
		title3: "Delete Wallet",
		title4: "Payment Details",
		title5: "Payment Address",
		title6: "Payee Address",
		title7: "Miner Fee",
		title8: "Enter Password",
		title9: "Transaction Details",
		butName: "Confirm", 
		butName1: "Confirm Payment", 
		inputPwd: "Please enter wallet password"
	},
	// 引导页
	guide: {
		imageList: [{
			name: 'Welcome to CryptoWallet',
			subtitle: 'Trusted by millions, CryptoWallet is a secure wallet that brings everyone into the world of web3 ',
			src: '/static/guide/guide03.png'
		},
		{
			name: 'Manage your digital assets',
			subtitle: 'Store, spend and send digital assets such as tokens, NFTs, unique collectibles.',
			src: '/static/guide/guide01.png'
		},
		{
			name: 'Your gateway to web3',
			subtitle: 'Log in and trade with CryptoWallet to invest, earn money, play games, and more!',
			src: '/static/guide/guide02.png'
		}
	],
	butName: "Start Using"
	},
	// 资产
	Assets: {
		transfer: "Transfer",
		gathering: "Collection",
		against: "Exchange",
		acceptVollar: "Receive Vollar",
		CryptoWallet: "CryptoWallet",
		gatheringAddress: "Payment address",
		acceptVollarAddress: "Only receive Vollar to this address",
		reminder: "Sending other cryptocurrencies may result in permanent loss",
		particulars: "Transaction Details",
		Minutes: "Minutes ago",
		transferNav: "Transfer",
		placeholder: "Enter or paste wallet address",
		transferAmount: "Transfer Amount",
		theNumber: "Please enter quantity",
		complete: "All",
		balance: "Wallet Balance",
		workmanship: "Miner fee",
		custom: "Customize",
		theChain: "Chain Data",
		textPlaceholder: "The data will be written to the blockchain and will consume a certain fee",
		countersign: "Confirm",
		slow:'Slow',
		recommend:'Middle',
		fast:"Quick",

	},
	// 更新弹框
	update: {
		title1: "New version discovered",
		title2: "New Function",
		title3: "1、Update Content",
		title4: "2、Update Content",
		title5: "3、Update Content",
		butName: "Renew", 
		butName1: "Install", 
	},
	
	// 跨链
	CrossChain: {
		navTitle: "Cross-Chain", 
		inputl: "Transfer Out Quantity", 
		inputr: "Received Quantity", 
		title1: "Exchange Rate", 
		title2: "Handling Fee",    
		title3: "Transaction Details", 
		title4: "Details",  
		title5: "Payment Address", 
		title6: "Payee Address", 
		title7: "Miner Fee",
		title8: "Enter Password",  
		butName: "Confirm", 
		butName1: "Confirm Payment", 
		inputPwd: "Please enter wallet password"   
	},
	// 底部导航
	tabBar: {
		Assets: 'Assets', 
		Find: 'Chain', 
		CrossChain: 'Find',  
		my: 'Me' 
	},
	
	// 发现
	Find: {
		navTitle:"Find",
		placeholder: "Please enter content",
		list1: [{
			name: 'Recent',
		}],
		title1: "Recommend ", 
		title2: "All"  
	},
	// 我的
	my: {
		navTitle:"Find",
		list: [{
			title: "Manage Wallets"
		},
		{
			title: "Announcement "
		},
		{
			title: "Language"
		},
		{
			title: "Invite Friends" 
		},
		{
			title: "New version update"
		},
		{ 
			title: "User Agreement" 
		},
		{
			title: "Contact Us" 
		}
	],
	edition: "Already the latest version" 

	},
	locales: {
		rightText: "Save",
		list: [{
				title: "English",
				locale: "en"
			},
			{
				title: "中文繁體",
				locale: "zh"
			},
			{
				title: "日本語",
				locale: ""
			},
			{
				title: "한국어",
				locale: ""
			},
			{
				title: "Español",
				locale: ""
			}
		]
	},
	// 用戶協議
	user: {
		navTitle: "User Agreement",
		title: "CryptoWallet User Service Agreement",
		text: `最近更新于：2022年02月15日 <br /><br />

				尊敬的用户：<br /><br />

				感谢您选择CryptoWallet服务。《CryptoWallet服务协议》（以下简称“本协议”）由IMTOKEN PTE.
				LTD.（以下简称“本公司”，公司注册号：201900958N，本公司是一家在新加坡注册的公司，注册地址为9 Temasek Boulevard #04-02 Suntec Tower Two
				Singapore
				038989）和您（以下简称“用户”）签订，本协议在您与本公司之间具有合同上的法律效力。在本协议中：（1）“我们”和“我们”指代本公司，“我们的”应据此解释；及（2）“您”指代用户，“您的”应据此解释。您和本公司单独称为“一方”，合称为“双方”。<br /><br />

				本公司在此特别提醒您在使用我们CryptoWallet移动应用（以下简称“CryptoWallet” 或“本软件”，CryptoWallet可在各移动应用平台上下载，包括但不限于Google
				Play和Apple App Store）之前，请认真阅读本协议及后文提及的相关协议，尤其是本协议中“免责及责任限制”等以加粗形式体现的条款，确保您充分理解本协议中各条款，并自主考虑风险。`
	},
	// 关于我们
	aboutUs: {
		title:"About Us", 
		text: "Current Version：1.4.9",  
		list: [{
				title: "Official Website", 
				url: ""
			},
			{
				title: "Telegram",
				url: ""
			},
			{
				title: "Twitter",
				url: ""
			},
			{
				title: "Contact us", 
				url: ""
			},
		]
	},
	// 官方网站
	WebSite: {
		title: "en",
		list: [{
			title: "Manage your digital assets",
			text: "Available as a browser extension and mobile app, CryptoWallet provides you with everything you need for keystores, secure logins, token wallets and token exchanges.", 

			img: "/static/common/phone1.png"
		},
		{
			title: "Explore Blockchain Applications", 

			text: "CryptoWallet provides the easiest yet most secure way to connect to blockchain-based applications. You are always in control when interacting on the new decentralized web.", 
			img: "/static/common/phone2.png"
		},
		{
			title: "Own Your Data", 
			text: " CryptoWallet generates passwords and keys on your device so only you can access your account and data",

				img: "/static/common/phone3.png"
			},
		]
	},
	// 管理钱包
	WalletName: {
		title1: "Wallet Name",
		title2: "Show Mnemonic",
		title3: "Exit Prompt", 
		title4: "All wallet data will be deleted after exiting, please make sure the wallet information has been backed up",
		
		title5: "Wallet information has been backed up",
	},
	// 公告
	Notice: {
		listTitle: "Announcement",
		viewTitle: "Details"
	},
	
	// 邀请好友
	InviteFriends: {
		navTitle: "Invite Friends", 
		title1: " A secure wallet for the blockchain web3 world", 
		title2: "Perfect combination with blockchain applications", 
		title3: "Storage",
		title4: "Send",
		title5: "Digital Assets",
		title6: "Unique collectibles",
		title7: "Scan the QR code to register", 
		title8: "Save Picture",  
	},
	// 钱包列表
	WalletList: {
		title: "CryptoWallet",
		title1:  "Identity Wallet", 
		title2: "Cancel",
		title3: "Create Wallet",
		list: [{
				name: 'Create Wallet',
				color: '#11C4D1',
				fontSize: '30'
			},
			{
				name: 'Import Wallet',
				color: '#11C4D1',
				fontSize: '30'
				// disabled: true
			}
		],
	},
	// 闪兑
	FlashCash: {
		navTitle: "Exchange Details",
		title1: "Exchange",
		title2: "Date",
		title3: "State",
	},
	// 交易详情
	Deal: {
		navTitle: "Transaction Details",
		title1: "Confirming",
		title2: "Transfer Failed",
		title3: "Transfer Successful", 
		title4: "Remark",  
		title5: "Hash Value",
		title6: "Block Height",
		title7: "Transaction Hour",
		title8: "Query Url",
		title9: "Query Details",
	},
	// 助記詞
	Word: {
		title1: "A Mnemonic Phrase (SRP) grants full access to your wallet, funds and accounts.",

		title2: "CryptoWallet is a non-custodial wallet, which means you are the owner of the SRP.",
		title3: "Tap to show mnemonic",
		title4: "Make sure no one is looking at your screen", 

		title5: "This is your mnemonic, write it on paper and keep it in a safe place, you will need to re-enter this mnemonic in the next step (in order)",
		title6: "Show Mnemonic",
		title7: "Write down your mnemonic",
	},
	// 步驟條
	CreateWallet: {
		steps1: "Create Password",
		steps2: "Backup Mnemonic",
		steps3: "Confirm Mnemonic",
		steps4: "Keep your wallet safe",
	},
	BackupTips: {
		navTitle: "CryptoWallet",
		title1: "Backup Tips",
		title2: "Taking the mnemonic is equivalent to having the ownership of the wallet assets",
		title3: "The mnemonic consists of 12 English words, please copy and keep it properly",
		title4: "The mnemonic is lost and cannot be retrieved, please make sure to back up the mnemonic",
		title5: "I See"
	},
	ConfirmMnemonicsFirst: {
		navTitle: "CryptoWallet",
		title1: "Confirm Mnemonic",
		title2: "Select each word in the order presented before",
		title3: "Confirm",
		title4: "The mnemonic is in the wrong order, please check if the mnemonic you copied is correct",

	},
	CreatePassword: {
		title1: "Create Password",
		title2: "Set Wallet Name",
		title3: "Wallet Password",
		title4: "Please enter the wallet password, at least 8 digits",
		title5: "Please confirm the wallet password",
		title6: "Tips",
		title7: "(Optional) Password hint information",
		title8: "By continuing, you agree to these",
		title9: "Terms and Conditions",
		title10: "Create wallet",
		title11: "Mnemonic Import",
		title12: "Separate by spaces by entering a mnemonic or scanning a QR code",
		title13: "Confirm"
	},
	NoHaveWallet: {
		title1: "Add wallet",
	},
	WalletSet: {
		title1: "Wallet Settings",
		title2: "Import an existing wallet or create a wallet",
		title3: "Already have a wallet",
		title4: "No wallet",
		title5: "Create new wallet",
		title6: "Cold Wallet",
		title7: "Create new wallet",
		title8: "Offline mport",
		title9: "By continuing you agree to these",
		title10: "Terms and Conditions",
	},
	WriteMnemonicsFirst: {
		title1: "Backup Tips",
		title2: "Taking the mnemonic is equivalent to having the ownership of the wallet assets",
		title3: "The mnemonic consists of 12 English words, please copy and keep it properly",
		title4: "The mnemonic is lost and cannot be retrieved, please make sure to back up the mnemonic",
		title5: "I See"
	},
	WriteMnemonicsSecond: {
		title1: "Write down your mnemonic",
		title2: "This is your mnemonic, write it on paper and keep it in a safe place, you will need to re-enter this mnemonic in the next step (in order)",
		title3: "Confirm",
		title4: "Tap to show mnemonic",
		title5: "Make sure no one is looking at your screen",
	}
}

const run = require("npm-run-all");
	switch(process.argv[2]) {
		case 'start':
		    console.log('\nStarting Development Server..');

			run(['watch-css', 'start-js'], {
				parallel: true
			}).then((status) => {
				// CSS Watch makes this block non executable
		    }).catch(err => {
		        console.log(err);
   				process.exit(0);
		    });
		break;
		case 'build':
		    console.log('\nMaking Build..');

			run(['build-css', 'build-js'], {
				parallel: false
			}).then((status) => {
				console.log("\nBuild Success.")
		    }).catch(err => {
		        console.log(err)
		        process.exit(1);
		    });
		break;
		default:
			console.log("Unsupported Argument")
		    process.exit(1);
		break;
	}
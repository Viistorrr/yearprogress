const { Home } = require('./app/page')

async function updateYearInfo(){
    const {props} = await Home.getInitialProps();
    const options = { timeZone: 'America/Bogota',  };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const date = new Date();
}
let now = new Date()
let mon = now.getMonth()

switch (mon) {
    case 0:
        console.log('January');
        break;
        
    case 1:
        console.log('February');
        break;

    case 2:
        console.log('March');
        break;

    case 3:
        console.log('April');
        break;

    case 4:
        console.log('May');
        break;

    case 5: 
        console.log('June');
        break;

    case 6:
        console.log('July');
        break;

    case 7: 
        console.log('August');
        break;

    case 8:
        console.log('September');
        break;

    case 9:
        console.log('October');
        break;

    case 10:
        console.log('November');
        break;

    case 11:
        console.log('December');
        break;

    default:
        console.log('[ERROR] Invalid Number!');
        break;                                                
}
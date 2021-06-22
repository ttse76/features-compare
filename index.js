const featuresPyOut = require('./templates/python-features.json');
const featuresDeOut = require('./templates/de-features.json');

const printList = (list) => {
    list.forEach(item => {
        console.log(item);
    });
    console.log('\n');
};

const compare = () => {
    const pyFeats = Object.keys(featuresPyOut);
    const deFeats = Object.keys(featuresDeOut);

    var deNotInPy = [];
    var pyNotInDe = [];

    pyFeats.forEach(pyFeat => {
        if(!deFeats.includes(pyFeat)){
            pyNotInDe.push(pyFeat);
        }
    });

    deFeats.forEach(deFeat => {
        if(!pyFeats.includes(deFeat)){
            deNotInPy.push(deFeat);
        }
    });

    if(pyNotInDe.length !== 0){
        console.log('Features in experian-features but not in decision-engine');
        printList(pyNotInDe);
    }else{
        console.log('All python features in decision engine')
    }

    if(deNotInPy.length !== 0){
        console.log('Features in decision-engine but not in experian-features ');
        printList(deNotInPy);
    }else{
        console.log("All decision engine features in python");
    }
};

compare();

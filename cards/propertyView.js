var fastn = require('./fastn');


module.exports = function() {
    return fastn('li',
        {class: 'flex-card-listitem'},

        fastn('div', {class: 'flex-card'},
            fastn('div', {class: 'flex-card-image'},
                fastn('img', {
                    src: fastn.binding('images.main', function(object){
                        return object;
                    })
                })
            ),
            fastn('div', {class: 'flex-card-content'},
                fastn('h3', {class: 'flex-card-heading'},
                    fastn.binding('price')
                ),
                fastn('p', fastn.binding('address'))
            )
        )
    );
};
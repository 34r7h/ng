
var config          = require('../config');

var games = {
    cheeseburger:   "Cheeseburger",
    chinese:        "Chinese",
    french:         "French",
    hotdog:         "Hot Dog",
    indian:         "Indian",
    italian:        "Italian",
    pizza:          "Pizza"
};

exports.show = function (req, res, next) {
    var id              = req.params.id,
        game;

    if(!games[id]) {
        return res.send(404);
    }

    game = {
        id:         id,
        title:      games[id],
        url:        config.rootUrl + 'games/' + id,
        imageUrl:   config.rootUrl + 'images/games/' + id + '-full.png'
    };

    res.render('game', {
        appId:          config.facebook.appId,
        appNamespace:   config.facebook.appNamespace,
        game:           game
    });
};

exports.showWinJs = function (req, res, next) {
    // this method is used for facebook-winjs-sdk sample and not required to actually run this sample
    var id              = req.params.id,
        game;

    if(!games[id]) {
        return res.send(404);
    }

    game = {
        id:         id,
        title:      games[id],
        url:        config.rootUrl + 'winjs/games/' + id,
        imageUrl:   config.rootUrl + 'images/games/' + id + '-full.png'
    };

    res.render('game', {
        appId:          '438749336206495',
        appNamespace:   'winjsscrumptious',
        game:           game
    });
};

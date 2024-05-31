import keys from '../config/keys.js';
import JwtStrategy from ('passport-jwt').Strategy;
import  ExtractJwt  from ('passport-jwt').ExtractJwt;
import mongoose from 'mongoose';
import User from mongoose.model("users");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
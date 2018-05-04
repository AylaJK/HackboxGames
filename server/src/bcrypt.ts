import bcrypt from "bcrypt-nodejs";

function bcryptCompare(plaintext: string, hashed: string): Promise<boolean> {
  return new Promise ((resolve, reject) => {
    bcrypt.compare(plaintext, hashed, function(err, isMatch) {
      if (err) return reject(err);
      return resolve(isMatch);
    });
  });
}

function bcryptHash(plaintext: string): Promise<string> {
  return new Promise ((resolve, reject) => {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(plaintext, salt, function(err, hashed) {
        if (err) return reject(err);
        return resolve(hashed);
      });
    });
  });
}

export default { compare: bcryptCompare, hash: bcryptHash, };

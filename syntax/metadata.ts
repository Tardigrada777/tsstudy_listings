import 'reflect-metadata';

/*function just contains simple examples of applying metadata */
function simpleExample() {
  const plane = {
    color: 'red'
  };

  // meta property
  Reflect.defineMetadata('note', 'hi there', plane);

  // metadata for actual property
  Reflect.defineMetadata('note', 'hi there', plane, 'color');

  const note = Reflect.getMetadata('note', plane, 'color');
  console.log(note);
}

@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('vrrrr');
  }
}

function get(path: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    console.log(path);
  }
}

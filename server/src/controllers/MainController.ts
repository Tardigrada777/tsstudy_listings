import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators';

export function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Not permitted');
}

@controller('')
class MainController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(/*html*/ `
        <div>
          <div>
            You are logged in
            <a href="/auth/logout">logout</a>
          </div>
        </div>
      `);
    } else {
      res.send(/*html*/ `
        <div>
          <div>
            You are not logged in
            <a href="/auth/login">login</a>
          </div>
        </div>
      `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('Welcome to protected route, logged in user');
  }
}

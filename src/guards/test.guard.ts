import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class TestGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const role = context.switchToHttp().getRequest();
    console.log(role.url);
    console.log('Guards2...');
    return true;
  }
}

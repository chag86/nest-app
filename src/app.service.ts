import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nestjs API com TypeOrm e SQLite! <p><a href="http://localhost:3000/api/">Documentação</a></p>';
  }
}

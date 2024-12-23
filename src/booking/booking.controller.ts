import { Controller, Get } from '@nestjs/common';

@Controller('booking')
export class BookingController {
  @Get()
  public getBooking(): string {
    return 'Booking';
  }
}

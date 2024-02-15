import { PartialType } from '@nestjs/mapped-types';
import { CreateReportDto } from './create-report.dto';

export class GetEstimateDto extends PartialType(CreateReportDto) {}

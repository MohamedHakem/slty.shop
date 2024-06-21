import { NextRequest } from 'next/server';

export interface EnhancedNextRequest extends NextRequest {
  isPosthog: boolean;
  isApiAuthRoute: boolean;
}

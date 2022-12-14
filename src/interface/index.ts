import { StanOptions, StartPosition } from 'node-nats-streaming';
import { ModuleMetadata } from '@nestjs/common/interfaces';

export type TransportConnectOptions = StanOptions;

export interface TransportSubscriptionOptions {
  ackWait?:number;
  deliverAllAvailable?: boolean;
  durableName?: string;
  manualAckMode?: boolean;
  maxInFligth?: number;
  startAt?: StartPosition;
  startAtSequence?: number;
  startAtTimeDelta?: number;
  startTime?: Date;
  startWithLastReceived?: boolean;
}

export interface NatsStreamingPublishOptions {
  clusterId: string,
  clientId: string,
  connectOptions: TransportConnectOptions
}

export interface NatsStreamingPublishAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useFactory: (...args: any[]) => Promise<NatsStreamingPublishOptions> | NatsStreamingPublishOptions;
  inject?: any[]
}
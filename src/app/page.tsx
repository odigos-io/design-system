'use client';
import React from 'react';
import { DataFlow } from '..';
// import { nodes, edges } from '@/design.system/data.flow/builder';
const n = [
  {
    id: 'center-1',
    type: 'custom',
    position: {
      x: 850,
      y: 248,
    },
    data: {
      label: 'Center Node',
    },
  },
  {
    id: 'namespace-0',
    type: 'source',
    position: {
      x: 100,
      y: -452,
    },
    data: {
      name: 'adservice',
      kind: 'Deployment',
      namespace: 'default',
      languages: [
        {
          container_name: 'server',
          language: 'java',
        },
      ],
    },
  },
  {
    id: 'namespace-1',
    type: 'source',
    position: {
      x: 100,
      y: -352,
    },
    data: {
      name: 'cartservice',
      kind: 'Deployment',
      namespace: 'default',
      languages: [
        {
          container_name: 'server',
          language: 'dotnet',
        },
      ],
    },
  },
  {
    id: 'namespace-2',
    type: 'source',
    position: {
      x: 100,
      y: -252,
    },
    data: {
      name: 'checkoutservice',
      kind: 'Deployment',
      namespace: 'default',
      languages: [
        {
          container_name: 'server',
          language: 'go',
        },
      ],
    },
  },
  {
    id: 'namespace-3',
    type: 'source',
    position: {
      x: 100,
      y: -152,
    },
    data: {
      name: 'coupon',
      kind: 'Deployment',
      namespace: 'default',
      languages: [
        {
          container_name: 'coupon',
          language: 'javascript',
        },
      ],
    },
  },
  {
    id: 'namespace-4',
    type: 'source',
    position: {
      x: 100,
      y: -52,
    },
    data: {
      name: 'currencyservice',
      kind: 'Deployment',
      namespace: 'default',
      languages: [
        {
          container_name: 'server',
          language: 'javascript',
        },
      ],
    },
  },
  {
    id: 'namespace-5',
    type: 'source',
    position: {
      x: 100,
      y: 48,
    },
    data: {
      name: 'emailservice',
      kind: 'Deployment',
      namespace: 'default',
      languages: [
        {
          container_name: 'server',
          language: 'python',
        },
      ],
    },
  },
  {
    id: 'namespace-6',
    type: 'source',
    position: {
      x: 100,
      y: 148,
    },
    data: {
      name: 'frontend',
      kind: 'Deployment',
      namespace: 'default',
      languages: [
        {
          container_name: 'frontend',
          language: 'java',
        },
      ],
    },
  },
  {
    id: 'namespace-7',
    type: 'source',
    position: {
      x: 100,
      y: 248,
    },
    data: {
      name: 'inventory',
      kind: 'Deployment',
      namespace: 'default',
      languages: [
        {
          container_name: 'inventory',
          language: 'python',
        },
      ],
    },
  },
  {
    id: 'namespace-8',
    type: 'source',
    position: {
      x: 100,
      y: 348,
    },
    data: {
      name: 'loadgenerator',
      kind: 'Deployment',
      namespace: 'default',
      languages: [
        {
          container_name: 'main',
          language: 'go',
        },
      ],
    },
  },
  {
    id: 'namespace-9',
    type: 'source',
    position: {
      x: 100,
      y: 448,
    },
    data: {
      name: 'membership',
      kind: 'Deployment',
      namespace: 'default',
      languages: [
        {
          container_name: 'membership',
          language: 'go',
        },
      ],
    },
  },
  {
    id: 'namespace-10',
    type: 'source',
    position: {
      x: 100,
      y: 548,
    },
    data: {
      name: 'paymentservice',
      kind: 'Deployment',
      namespace: 'default',
      languages: [
        {
          container_name: 'server',
          language: 'javascript',
        },
      ],
    },
  },
  {
    id: 'namespace-11',
    type: 'source',
    position: {
      x: 100,
      y: 648,
    },
    data: {
      name: 'pricing',
      kind: 'Deployment',
      namespace: 'default',
      languages: [
        {
          container_name: 'pricing',
          language: 'dotnet',
        },
      ],
    },
  },
  {
    id: 'namespace-12',
    type: 'source',
    position: {
      x: 100,
      y: 748,
    },
    data: {
      name: 'productcatalogservice',
      kind: 'Deployment',
      namespace: 'default',
      languages: [
        {
          container_name: 'server',
          language: 'go',
        },
      ],
    },
  },
  {
    id: 'namespace-13',
    type: 'source',
    position: {
      x: 100,
      y: 848,
    },
    data: {
      name: 'recommendationservice',
      kind: 'Deployment',
      namespace: 'default',
      languages: [
        {
          container_name: 'server',
          language: 'python',
        },
      ],
    },
  },
  {
    id: 'namespace-14',
    type: 'source',
    position: {
      x: 100,
      y: 948,
    },
    data: {
      name: 'shippingservice',
      kind: 'Deployment',
      namespace: 'default',
      languages: [
        {
          container_name: 'server',
          language: 'go',
        },
      ],
    },
  },
  {
    id: 'namespace-15',
    type: 'source',
    position: {
      x: 100,
      y: 1048,
    },
    data: {
      name: 'frontend',
      kind: 'Deployment',
      namespace: 'tracing',
      languages: [
        {
          container_name: 'frontend',
          language: 'java',
        },
      ],
    },
  },
  {
    id: 'destination-0',
    type: 'destination',
    position: {
      x: 1250,
      y: 148,
    },
    data: {
      id: 'odigos.io.dest.elasticsearch-6qklw',
      name: 'Elasticsearch',
      type: 'elasticsearch',
      signals: {
        traces: true,
        metrics: false,
        logs: true,
      },
      fields: {
        ELASTICSEARCH_CA_PEM:
          '-----BEGIN CERTIFICATE-----\nMIIDIjCCAgqgAwIBAgIRANR/chGx5YexmqgwbVphZR8wDQYJKoZIhvcNAQELBQAw\nGzEZMBcGA1UEAxMQZWxhc3RpY3NlYXJjaC1jYTAeFw0yNDAzMDYxMjUwNTFaFw0y\nNTAzMDYxMjUwNTFaMBsxGTAXBgNVBAMTEGVsYXN0aWNzZWFyY2gtY2EwggEiMA0G\nCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQClNK8WB2C2aRC1xPkT9Vx3t2I8D8vE\nz4/XKi5djhqZx56VclUmnTGwwJSB6t+9eODVGM8HUBeZTw5r5VU3wz5KO34LfX/X\nDgeZf7jRE4JvNti+ufhYeXhX6yWt2y1lisTy89BMZA1/4r6UBamhDZ9zjC7++hNy\n21S+mgul4zrjC1fBfjz8O42jjkamNcq3SoQHn9puWPhsOBOc4SowJMFN6YIRf3Vy\nPvOuG8wP5uCU14dICW7X5M1JqHpcOTW0W7S5JLcVkozrqEQhQ3lc5f4OE0/GYQ5S\np5sesAUyv9Koiipx3gGvip2+E2Rf2nlLNNMYeFDKyRVmbxkOmIy6PVQdAgMBAAGj\nYTBfMA4GA1UdDwEB/wQEAwICpDAdBgNVHSUEFjAUBggrBgEFBQcDAQYIKwYBBQUH\nAwIwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUUh7RgBmgPOCGeP3hFqoVC689\nm4kwDQYJKoZIhvcNAQELBQADggEBAJCpewxuRV0s6EftuHI7Q1PJDYImDv54D1GI\n57nJwdhCZbvJ69m5hjtOAb7ZCerzJQKvN4sEcvcWPMJs15nBNXW+9fF0zN5RjBqU\nV8HA22bw8h+00lGUiozgG4DmFkd0GG35qjhPe9PyirOumiaSi2aGMUiWtkOgAFE2\nDKGLleYFdjDbfQjva/ViUJTo6I7b283foWEqkbaa58ju5QOtjpo09GOmyBXeXHoU\nbLnUqBAALo7FDSdKyMjWRLKSo2rc7jRn98jXzPqRaVuYhEGn+77GnkA5d3ea3fHP\nIrj44yKh8na1xqPEHEvryj9LnKL+yCpQILj5L+jIHVopTmQWyLQ=\n-----END CERTIFICATE-----',
        ELASTICSEARCH_PASSWORD: 'Elasticsearch',
        ELASTICSEARCH_URL: 'Elasticsearch',
        ELASTICSEARCH_USERNAME: 'Elasticsearch',
        ES_LOGS_INDEX: 'Elasticsearch',
        ES_TRACES_INDEX: 'Elasticsearch',
      },
      destination_type: {
        type: 'elasticsearch',
        display_name: 'Elasticsearch',
        image_url: 'https:/d15jtxgb40qetw.cloudfront.net/elasticsearch.svg',
        supported_signals: {
          traces: {
            supported: true,
          },
          metrics: {
            supported: false,
          },
          logs: {
            supported: true,
          },
        },
      },
    },
  },
  {
    id: 'destination-1',
    type: 'destination',
    position: {
      x: 1250,
      y: 248,
    },
    data: {
      id: 'odigos.io.dest.grafanacloudprometheus-2mcbr',
      name: 'Prometheus',
      type: 'grafanacloudprometheus',
      signals: {
        traces: false,
        metrics: true,
        logs: false,
      },
      fields: {
        GRAFANA_CLOUD_PROMETHEUS_PASSWORD: 'Prometheus',
        GRAFANA_CLOUD_PROMETHEUS_RW_ENDPOINT: 'Prometheus',
        GRAFANA_CLOUD_PROMETHEUS_USERNAME: 'Prometheus',
        PROMETHEUS_RESOURCE_ATTRIBUTES_LABELS:
          '["k8s.container.name","k8s.pod.name","k8s.namespace.name","Prometheus"]',
        PROMETHEUS_RESOURCE_EXTERNAL_LABELS: '{"dsfd":"fdsfs"}',
      },
      destination_type: {
        type: 'grafanacloudprometheus',
        display_name: 'Grafana Cloud Prometheus',
        image_url: 'https:/d15jtxgb40qetw.cloudfront.net/grafana.svg',
        supported_signals: {
          traces: {
            supported: false,
          },
          metrics: {
            supported: true,
          },
          logs: {
            supported: false,
          },
        },
      },
    },
  },
  {
    id: 'destination-2',
    type: 'destination',
    position: {
      x: 1250,
      y: 348,
    },
    data: {
      id: 'odigos.io.dest.s3-gk7bn',
      name: 'aws',
      type: 's3',
      signals: {
        traces: true,
        metrics: true,
        logs: true,
      },
      fields: {
        S3_BUCKET: 'aws',
        S3_MARSHALER: 'otlp_proto',
        S3_PARTITION: 'minute',
        S3_REGION: 'aws',
      },
      destination_type: {
        type: 's3',
        display_name: 'AWS S3',
        image_url: 'https:/d15jtxgb40qetw.cloudfront.net/s3.svg',
        supported_signals: {
          traces: {
            supported: true,
          },
          metrics: {
            supported: true,
          },
          logs: {
            supported: true,
          },
        },
      },
    },
  },
  {
    id: 'action-0',
    type: 'action',
    position: {
      x: 420,
      y: 250,
    },
    data: {
      id: 'aci-f6c9f',
      type: 'AddClusterInfo',
      spec: {
        actionName: 'Cluster  Attributes',
        notes:
          'Actions are a way to modify the OpenTelemetry data recorded by Odigos Sources, before it is exported to your Odigos Destinations.',
        signals: ['METRICS', 'TRACES'],
        clusterAttributes: [
          {
            attributeName: 'Attributes',
            attributeStringValue: 'Attributes',
          },
        ],
      },
    },
  },
  {
    id: 'action-1',
    type: 'action',
    position: {
      x: 545,
      y: 250,
    },
    data: {
      id: 'aci-hfgcb',
      type: 'AddClusterInfo',
      spec: {
        actionName: 'Link',
        notes: 'Link to docs',
        signals: ['LOGS', 'METRICS', 'TRACES'],
        clusterAttributes: [
          {
            attributeName: 'sadsad',
            attributeStringValue: 'sadsa',
          },
          {
            attributeName: 'asdsa',
            attributeStringValue: 'asdasd',
          },
        ],
      },
    },
  },
  {
    id: 'action-2',
    type: 'action',
    position: {
      x: 670,
      y: 250,
    },
    data: {
      id: 'aci-r67mp',
      type: 'AddClusterInfo',
      spec: {
        actionName: 'Initialize',
        notes: 'This is the initialization phase of the cluster.',
        signals: ['LOGS', 'METRICS', 'TRACES'],
        clusterAttributes: [
          {
            attributeName: 'region',
            attributeStringValue: 'us-east-1',
          },
          {
            attributeName: 'instanceType',
            attributeStringValue: 't2.micro',
          },
          {
            attributeName: 'availabilityZones',
            attributeStringValue: '3',
          },
        ],
      },
    },
  },
];

const e = [
  {
    id: 'enamespace-0-center-1',
    source: 'namespace-0',
    target: 'action-0',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'enamespace-1-center-1',
    source: 'namespace-1',
    target: 'action-0',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'enamespace-2-center-1',
    source: 'namespace-2',
    target: 'action-0',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'enamespace-3-center-1',
    source: 'namespace-3',
    target: 'action-0',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'enamespace-4-center-1',
    source: 'namespace-4',
    target: 'action-0',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'enamespace-5-center-1',
    source: 'namespace-5',
    target: 'action-0',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'enamespace-6-center-1',
    source: 'namespace-6',
    target: 'action-0',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'enamespace-7-center-1',
    source: 'namespace-7',
    target: 'action-0',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'enamespace-8-center-1',
    source: 'namespace-8',
    target: 'action-0',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'enamespace-9-center-1',
    source: 'namespace-9',
    target: 'action-0',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'enamespace-10-center-1',
    source: 'namespace-10',
    target: 'action-0',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'enamespace-11-center-1',
    source: 'namespace-11',
    target: 'action-0',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'enamespace-12-center-1',
    source: 'namespace-12',
    target: 'action-0',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'enamespace-13-center-1',
    source: 'namespace-13',
    target: 'action-0',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'enamespace-14-center-1',
    source: 'namespace-14',
    target: 'action-0',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'enamespace-15-center-1',
    source: 'namespace-15',
    target: 'action-0',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'ecenter-1-destination-0',
    source: 'center-1',
    target: 'destination-0',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'ecenter-1-destination-1',
    source: 'center-1',
    target: 'destination-1',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'ecenter-1-destination-2',
    source: 'center-1',
    target: 'destination-2',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'ecenter-1-action-0',
    source: 'action-0',
    target: 'action-1',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'ecenter-1-action-1',
    source: 'action-1',
    target: 'action-2',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'ecenter-1-action-2',
    source: 'action-2',
    target: 'center-1',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
];

export default function Home() {
  return (
    <div style={{ background: '#0E1C28', height: '100vh' }}>
      <DataFlow nodes={n} edges={e} />
    </div>
  );
}

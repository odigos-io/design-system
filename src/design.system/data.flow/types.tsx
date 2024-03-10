interface DataFlowNode {
  id: string;
  type: string;
  data: any;
  position: { x: number; y: number };
}
interface DataFlowEdge {
  id: string;
  source: string;
  target: string;
  animated?: boolean;
  style?: { stroke: string };
  data: any;
}

export interface IDataFlow {
  nodes: DataFlowNode[];
  edges: DataFlowEdge[];
}

export const nodes = [
  {
    id: 'destination-0',
    type: 'destination',
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
    position: {
      x: 800,
      y: 198.22265625,
    },
  },
  {
    id: 'destination-1',
    type: 'destination',
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
    position: {
      x: 800,
      y: 334.22265625,
    },
  },
  {
    id: 'destination-2',
    type: 'destination',
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
    position: {
      x: 800,
      y: 470.22265625,
    },
  },
  {
    id: 'namespace-0',
    type: 'namespace',
    data: {
      name: 'default',
      totalAppsInstrumented: 15,
    },
    position: {
      x: 0,
      y: 318.22265625,
    },
  },
  {
    id: 'namespace-1',
    type: 'namespace',
    data: {
      name: 'tracing',
      totalAppsInstrumented: 1,
    },
    position: {
      x: 0,
      y: 402.22265625,
    },
  },
  {
    id: 'centerNode',
    type: 'custom',
    data: null,
    position: {
      x: 400,
      y: 402.22265625,
    },
  },
];

export const edge = [
  {
    id: 'edges-destination-0',
    source: 'centerNode',
    target: 'destination-0',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'edges-destination-1',
    source: 'centerNode',
    target: 'destination-1',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'edges-destination-2',
    source: 'centerNode',
    target: 'destination-2',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'edges-namespace-0',
    source: 'namespace-0',
    target: 'centerNode',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'edges-namespace-1',
    source: 'namespace-1',
    target: 'centerNode',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
  {
    id: 'edges-centerNode',
    source: 'namespace-2',
    target: 'centerNode',
    animated: true,
    style: {
      stroke: '#96f3ff8e',
    },
    data: null,
  },
];

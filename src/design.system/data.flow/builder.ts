const sources = [
  {
    name: 'adservice',
    kind: 'Deployment',
    namespace: 'default',
    metrics: {
      data_transfer: '3.8 KB/s',
      cpu_usage: '3.8%',
      memory_usage: '3.8%',
    },
    languages: [
      {
        container_name: 'server',
        language: 'java',
      },
    ],
  },
  {
    name: 'cartservice',
    kind: 'Deployment',
    namespace: 'default',
    metrics: {
      data_transfer: '2.3 KB/s',
      cpu_usage: '3.8%',
      memory_usage: '3.8%',
    },
    languages: [
      {
        container_name: 'server',
        language: 'dotnet',
      },
    ],
  },
  {
    name: 'checkoutservice',
    kind: 'Deployment',
    namespace: 'default',
    metrics: {
      data_transfer: '0 Byte transfered',
      cpu_usage: '3.8%',
      memory_usage: '3.8%',
    },
    languages: [
      {
        container_name: 'server',
        language: 'go',
      },
    ],
  },
  {
    name: 'coupon',
    kind: 'Deployment',
    namespace: 'default',
    metrics: {
      data_transfer: '3.8 KB/s',
      cpu_usage: '3.8%',
      memory_usage: '3.8%',
    },
    languages: [
      {
        container_name: 'coupon',
        language: 'javascript',
      },
    ],
  },
];

const destinations = [
  {
    id: 'odigos.io.dest.elasticsearch-6qklw',
    name: 'Elasticsearch',
    type: 'elasticsearch',
    metrics: {
      data_transfer: '3.8 KB/s',
      cpu_usage: '3.8%',
      memory_usage: '3.8%',
    },
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
  {
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
  {
    id: 'odigos.io.dest.s3-gk7bn',
    name: 'aws',
    type: 's3',
    metrics: {
      data_transfer: '3.8111 KB/s',
      cpu_usage: '3.8%',
      memory_usage: '3.8%',
    },
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
];

const action = [
  {
    id: 'aci-f6c9f',
    type: 'AddClusterInfo',
    spec: {
      actionName: 'Cluster Attributes',
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
  {
    id: 'aci-hfgcb',
    type: 'DeleteAttribute',
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
  {
    id: 'aci-r67mp',
    type: 'RenameAttribute',
    spec: {
      actionName: 'Initialize Initialize',
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
];

interface Source {
  name: string;
  kind: string;
  namespace: string;
  metrics?: Record<string, string>;
  conditions?: {
    type: string;
    status: string;
    message: string;
    lastTransitionTime: string;
  }[];
  languages: Array<{
    container_name: string;
    language: string;
  }>;
}

interface Destination {
  id: string;
  name: string;
  type: string;
  metrics?: Record<string, string>;
  signals: {
    traces: boolean;
    metrics: boolean;
    logs: boolean;
  };
  fields: Record<string, any>;
  conditions?: {
    type: string;
    status: string;
    message: string;
    lastTransitionTime: string;
  }[];
  destination_type: {
    type: string;
    display_name: string;
    image_url: string;
    supported_signals: {
      traces: {
        supported: boolean;
      };
      metrics: {
        supported: boolean;
      };
      logs: {
        supported: boolean;
      };
    };
  };
}

interface Action {
  id: string;
  type: string;
  spec: {
    actionName: string;
    notes: string;
    signals: string[];
  };
}

interface FlowNode {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: any;
}

interface FlowEdge {
  id: string;
  source: string;
  target: string;
  animated: boolean;
  label?: string;
  style?: Record<string, any>;
  data?: any;
}

export const buildFlowNodesAndEdges = (
  sources: Source[],
  destinations: Destination[],
  actions: Action[]
): { nodes: FlowNode[]; edges: FlowEdge[] } => {
  let nodes: FlowNode[] = [],
    edges: FlowEdge[] = [];
  const centerNodeId = 'center-1';
  const xOffsetNamespace = 100;

  const destinations_length = destinations.length;
  let middle_index;

  if (destinations_length % 2 == 1) {
    middle_index = Math.floor(destinations_length / 2);
  } else {
    middle_index = destinations_length / 2 - 1;
  }

  // Desired y position for the middle node
  const desired_y_position = 248;

  // Calculate destinationyOffset
  const destinationyOffset = desired_y_position - middle_index * 100;

  const sources_length = sources.length;
  let middle_index_sources;

  if (sources_length % 2 == 1) {
    middle_index_sources = Math.floor(sources_length / 2);
  } else {
    middle_index_sources = sources_length / 2 - 1;
  }

  const sourceyOffset = desired_y_position - middle_index_sources * 100;

  // Create the center node
  const centerXPossition =
    actions?.length > 0 ? actions?.length * 150 + 600 : 600;
  nodes.push({
    id: centerNodeId,
    type: 'custom',
    position: { x: centerXPossition, y: 248 },
    data: { label: 'Center Node' },
  });

  // Create namespace nodes from sources and edges to the center
  sources.forEach((source, index) => {
    let hasError = false;
    if (source?.conditions) {
      hasError = source.conditions.some(
        (condition) => condition.status === 'False'
      );
    }
    const namespaceNodeId = `namespace-${index}`;
    nodes.push({
      id: namespaceNodeId,
      type: 'source',
      position: { x: xOffsetNamespace, y: sourceyOffset + index * 100 },
      data: source,
    });

    // Create metric node if source has metrics property
    if (source.metrics) {
      const metricNodeId = `metric-${index}`;
      nodes.push({
        id: metricNodeId,
        type: 'metric',
        position: { x: xOffsetNamespace + 300, y: sourceyOffset + index * 100 },
        data: { metrics: source.metrics },
      });
      edges.push({
        id: `e${namespaceNodeId}-${metricNodeId}`,
        source: metricNodeId,
        target: actions?.length > 0 ? `action-0` : centerNodeId,
        animated: true,
        style: { stroke: '#96f3ff8e' },
        data: null,
      });
      edges.push({
        id: `e${namespaceNodeId}-${centerNodeId}`,
        source: namespaceNodeId,
        target: metricNodeId,
        animated: true,
        style: { stroke: hasError ? '#ff0000' : '#96f3ff8e' },
        data: null,
      });
    } else {
      edges.push({
        id: `e${namespaceNodeId}-${centerNodeId}`,
        source: namespaceNodeId,
        target: actions?.length > 0 ? `action-0` : centerNodeId,
        animated: true,
        style: { stroke: hasError ? '#ff0000' : '#96f3ff8e' },
        data: null,
      });
    }
  });

  // Create destination nodes and edges from the center
  destinations.forEach((destination, index) => {
    let isErrored = false;
    if (destination?.conditions) {
      isErrored = destination.conditions.some(
        (condition) => condition.status === 'False'
      );
    }
    const destinationNodeId = `destination-${index}`;
    nodes.push({
      id: destinationNodeId,
      type: 'destination',
      position: {
        x: centerXPossition + 600,
        y: destinationyOffset + index * 100,
      },
      data: destination,
    });

    if (destination.metrics) {
      const metricNodeId = `metric-dest-${index}`;
      nodes.push({
        id: metricNodeId,
        type: 'metric',
        position: {
          x: centerXPossition + 250,
          y: destinationyOffset + index * 100,
        },
        data: { metrics: destination.metrics },
      });
      edges.push({
        id: `e${destinationNodeId}-${metricNodeId}`,
        source: centerNodeId,
        target: metricNodeId,
        animated: true,
        style: { stroke: '#96f3ff8e' },
        data: null,
      });
      edges.push({
        id: `e${destinationNodeId}-${metricNodeId}`,
        source: metricNodeId,
        target: destinationNodeId,
        animated: true,
        style: { stroke: '#96f3ff8e' },
        data: null,
      });
    } else {
      edges.push({
        id: `e${centerNodeId}-${destinationNodeId}`,
        source: centerNodeId,
        target: destinationNodeId,
        animated: true,
        style: { stroke: isErrored ? '#ff0000' : '#96f3ff8e' },
        data: null,
      });
    }
  });

  // Create action nodes and edges from the center
  actions.forEach((action, index) => {
    const actionNodeId = `action-${index}`;
    const nextActionNodeId = `action-${index + 1}`;
    nodes.push({
      id: actionNodeId,
      type: 'action',
      position: { x: 620 + index * 125, y: 250 },
      data: action,
    });
    edges.push({
      id: `e${centerNodeId}-${actionNodeId}`,
      source: actionNodeId,
      target: index + 1 === actions.length ? centerNodeId : nextActionNodeId,
      animated: true,
      style: { stroke: '#96f3ff8e' },
      data: null,
    });
  });

  return { nodes, edges };
};
// Example usage with typed data
export const { nodes, edges } = buildFlowNodesAndEdges(
  sources,
  destinations,
  action
);

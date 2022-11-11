import React, { Fragment } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled'
import MDDeviceGraphicalImage from './MDDeviceGraphicalImage';

const style = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  > div {
    padding: 10px;
  }

  @media (min-width: 540px) {
    flex-direction: row;
    flex-wrap: wrap;
    > div {
      width: 50%;
    }
  }
`

const Container = styled.div`
  margin-bottom: 10px;
`;

export default function MDDevicesCollection({ data, propertyNames }) {
  // const pattern = /[\w\-]+(?=\.png)/;
  // const matches = pattern.exec('');
  // const fileName = matches[0];

  // const propertyNames = ['a', 'y', 'bw'];
  const allDevices = data.reduce((devices, currentDevice) => {

    propertyNames.forEach((propertyName, index) => {
      console.log('property ', propertyName);
      devices[propertyName] = devices[propertyName] ?? [];

      devices[propertyName]?.push({
        deviceName: currentDevice.deviceName,
        deviceGraphicalImageUrl: currentDevice.deviceGraphicalImageUrls[index]
      });
    });

    return devices;

  }, {});


  return (
    propertyNames.map((propertyName) =>
      <Container>
        <h4> {propertyName} </h4>
        <div css={style}>
          {
            allDevices[propertyName].map((item) =>
              <Fragment key={item.id}>
                <MDDeviceGraphicalImage deviceName={item.deviceName} deviceGraphicalImageUrl={item.deviceGraphicalImageUrl} />
              </Fragment>
            )
          }
        </div>
        <hr />
      </Container>
    )
  );

}

import styled from 'styled-components'

const TableContainer = styled.table`
  border: 1px solid hsl(var(--clr-dark));
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;

  caption {
    font-size: 1.5em;
    margin: 0.5em 0 0.75em;
  }

  tr {
    background-color: hsl(var(--clr-white) / 0.15);
    border: 1px solid #ddd;
    padding: 0.35em;
  }

  th,
  td {
    padding: 0.625em;
    text-align: center;
  }

  th {
    font-size: var(--fs-300);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @media screen and (max-width: 600px) {
    border: 0;

    caption {
      font-size: 1.3em;
    }

    thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    tr {
      border-bottom: 3px solid hsl(var(--clr-white));
      display: block;
      margin-bottom: 0.625em;
    }

    td {
      border-bottom: 1px solid hsl(var(--clr-white));
      display: block;
      font-size: 0.8em;
      text-align: right;

      &:before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
      }

      &:last-child {
        border-bottom: 0;
      }
    }
  }
`

export default TableContainer

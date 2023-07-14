import React from 'react'
import './queryHistory.css'

const QueryHistory = () => {
  return (
    <section id='query-history' className='mt-1 text-center card card-width custom-shadow bg-custom-color'>
      <h4>consultas</h4>
      <small>(En desarrollo)</small>

      <table className='table table-striped table-hover bg-custom-color'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Fecha</th>
            <th scope='col'>Ver más</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>12/12/2022</td>
            <td title='Ver consulta'><i class="bi bi-clipboard2-fill"></i></td>
          </tr>

          <tr>
            <td>2</td>
            <td>11/11/2022</td>
            <td title='Ver consulta'><i class="bi bi-clipboard2-fill"></i></td>
          </tr>

          <tr>
            <td>3</td>
            <td>10/10/2022</td>
            <td title='Ver consulta'><i class="bi bi-clipboard2-fill"></i></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default QueryHistory
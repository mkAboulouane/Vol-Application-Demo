package com.ana.test.ws.rest.provided.facade.user;

import com.ana.test.service.user.facade.AvionService;
import java.util.List;

import com.ana.test.ws.rest.provided.dto.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ana.test.bean.Avion;
import com.ana.test.ws.rest.provided.converter.AvionConverter;
import com.ana.test.ws.rest.provided.vo.AvionVo;


@Api("Manages Avion services")
@RestController
@RequestMapping("avion")
public class AvionRest {

    @Autowired
    private AvionService avionService;

    @Autowired
    private AvionConverter avionConverter;



       @ApiOperation("Finds a list of all Avions")
       @GetMapping("/")
       public List<AvionVo> findAll(){
           return avionConverter.toVo(avionService.findAll());
       }


       @ApiOperation("Finds a list of all Avions with pagination")
       @GetMapping("/paginate/")
       public Page<AvionVo> paginate(@RequestParam int page, @RequestParam int size) {
          org.springframework.data.domain.Page<Avion> paginate = avionService.paginate(page, size);
          return new Page<>(size, page, paginate.getTotalElements(), avionConverter.toVo(paginate.getContent()));
        }


       @ApiOperation("Saves the specified Avion")
       @PostMapping("/")
       public AvionVo save(@RequestBody  AvionVo  entityVo){
        Avion entity = avionConverter.toItem(entityVo);
           entity = avionService.save(entity);
        return avionConverter.toVo(entity);
       }


       @ApiOperation("Updates the specified  Avion")
       @PutMapping("/")
       public AvionVo update(@RequestBody  AvionVo  entityVo){
        Avion entity = avionConverter.toItem(entityVo);
           entity = avionService.update(entity);
        return avionConverter.toVo(entity);
       }


       @ApiOperation("delete the specified Avion By Id")
       @DeleteMapping("/{id}/")
       public int delete(@PathVariable Long id){
           return avionService.deleteById(id);
       }

       @ApiOperation("find the specified Avion By Id")
       @GetMapping("/{id}/")
       public AvionVo findById(@PathVariable Long id){
           return avionConverter.toVo( avionService.findById(id));
       }

       @ApiOperation("Search Avion by a specific criteria")
       @PostMapping("/search")
       public List<AvionVo> findByCriteria(@RequestBody AvionVo entity) {
          return avionConverter.toVo(avionService.findByCriteria(entity));
       }


       @ApiOperation("find the specified Avion By CodeAvion")
       @GetMapping("/codeavion/{reference}/")
        public AvionVo findByCodeAvion(String reference) {
        return avionConverter.toVo( avionService.findByCodeAvion(reference));
       }




}
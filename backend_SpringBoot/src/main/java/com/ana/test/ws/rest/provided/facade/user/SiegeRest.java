package com.ana.test.ws.rest.provided.facade.user;

import com.ana.test.service.user.facade.SiegeService;
import java.util.List;

import com.ana.test.ws.rest.provided.dto.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ana.test.bean.Siege;
import com.ana.test.ws.rest.provided.converter.SiegeConverter;
import com.ana.test.ws.rest.provided.vo.SiegeVo;


@Api("Manages Siege services")
@RestController
@RequestMapping("siege")
public class SiegeRest {

    @Autowired
    private SiegeService siegeService;

    @Autowired
    private SiegeConverter siegeConverter;



       @ApiOperation("Finds a list of all Sieges")
       @GetMapping("/")
       public List<SiegeVo> findAll(){
           return siegeConverter.toVo(siegeService.findAll());
       }


       @ApiOperation("Finds a list of all Sieges with pagination")
       @GetMapping("/paginate/")
       public Page<SiegeVo> paginate(@RequestParam int page, @RequestParam int size) {
          org.springframework.data.domain.Page<Siege> paginate = siegeService.paginate(page, size);
          return new Page<>(size, page, paginate.getTotalElements(), siegeConverter.toVo(paginate.getContent()));
        }


       @ApiOperation("Saves the specified Siege")
       @PostMapping("/")
       public SiegeVo save(@RequestBody  SiegeVo  entityVo){
        Siege entity = siegeConverter.toItem(entityVo);
           entity = siegeService.save(entity);
        return siegeConverter.toVo(entity);
       }


       @ApiOperation("Updates the specified  Siege")
       @PutMapping("/")
       public SiegeVo update(@RequestBody  SiegeVo  entityVo){
        Siege entity = siegeConverter.toItem(entityVo);
           entity = siegeService.update(entity);
        return siegeConverter.toVo(entity);
       }


       @ApiOperation("delete the specified Siege By Id")
       @DeleteMapping("/{id}/")
       public int delete(@PathVariable Long id){
           return siegeService.deleteById(id);
       }

       @ApiOperation("find the specified Siege By Id")
       @GetMapping("/{id}/")
       public SiegeVo findById(@PathVariable Long id){
           return siegeConverter.toVo( siegeService.findById(id));
       }



}
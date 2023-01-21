package com.ana.test.ws.rest.provided.facade.user;

import com.ana.test.service.user.facade.PassagerService;
import java.util.List;

import com.ana.test.ws.rest.provided.dto.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ana.test.bean.Passager;
import com.ana.test.ws.rest.provided.converter.PassagerConverter;
import com.ana.test.ws.rest.provided.vo.PassagerVo;


@Api("Manages Passager services")
@RestController
@RequestMapping("passager")
public class PassagerRest {

    @Autowired
    private PassagerService passagerService;

    @Autowired
    private PassagerConverter passagerConverter;



       @ApiOperation("Finds a list of all Passagers")
       @GetMapping("/")
       public List<PassagerVo> findAll(){
           return passagerConverter.toVo(passagerService.findAll());
       }


       @ApiOperation("Finds a list of all Passagers with pagination")
       @GetMapping("/paginate/")
       public Page<PassagerVo> paginate(@RequestParam int page, @RequestParam int size) {
          org.springframework.data.domain.Page<Passager> paginate = passagerService.paginate(page, size);
          return new Page<>(size, page, paginate.getTotalElements(), passagerConverter.toVo(paginate.getContent()));
        }


       @ApiOperation("Saves the specified Passager")
       @PostMapping("/")
       public PassagerVo save(@RequestBody  PassagerVo  entityVo){
        Passager entity = passagerConverter.toItem(entityVo);
           entity = passagerService.save(entity);
        return passagerConverter.toVo(entity);
       }


       @ApiOperation("Updates the specified  Passager")
       @PutMapping("/")
       public PassagerVo update(@RequestBody  PassagerVo  entityVo){
        Passager entity = passagerConverter.toItem(entityVo);
           entity = passagerService.update(entity);
        return passagerConverter.toVo(entity);
       }


       @ApiOperation("delete the specified Passager By Id")
       @DeleteMapping("/{id}/")
       public int delete(@PathVariable Long id){
           return passagerService.deleteById(id);
       }

       @ApiOperation("find the specified Passager By Id")
       @GetMapping("/{id}/")
       public PassagerVo findById(@PathVariable Long id){
           return passagerConverter.toVo( passagerService.findById(id));
       }

       @ApiOperation("Search Passager by a specific criteria")
       @PostMapping("/search")
       public List<PassagerVo> findByCriteria(@RequestBody PassagerVo entity) {
          return passagerConverter.toVo(passagerService.findByCriteria(entity));
       }


       @ApiOperation("find the specified Passager By Cin")
       @GetMapping("/cin/{reference}/")
        public PassagerVo findByCin(String reference) {
        return passagerConverter.toVo( passagerService.findByCin(reference));
       }




}